import { ethers } from "ethers";
import { Transaction } from "src/reducers/classes/transactiondata.js";

// Connects to the Ethereum Mainnet
// const provider = new ethers.providers.JsonRpcProvider(
//    "https://mainnet.infura.io/v3/e0c031fb7514497290111d08bcabba3c"
// );

let contractAddress = "0x188f79B0a8EdC10aD53285c47c3fEAa0D2716e83";

export const GET_TRANSACTIONS = "@market/get-transactions";
export const TRANSACTIONS_ERROR = "@market/transactions-error";
export const CLEAR_TRANSACTIONS = "@market/clear-transactions";

let etherscanProvider = new ethers.providers.EtherscanProvider(
   "homestead",
   "5UEMBTDRSINPPF47V59NTBTZR6KJPUDQ8W"
);

/**  
 * In transactionActions, getTransactions returns an object with payload: transactions, where transactions is an array of objects
  - To be consistent with the src/components/oraclemarketplace component, we should consider making transactions an object of objects where the key is the tx Hash.
  - This will potentially break sorting by date in /blockexplorer/index.js so the sorting needs to be refactored.
  - Refer to src/components/oraclemarkettable/index.js for sorting columns by id
*/

export const getTransactions = () => {
  const transactions = [];
  return async (dispatch) => {
    try {
      // Gets all transactions related to bonding contract
      // Note: provider.getLogs(filter) does not include failed transactions
      const transactionArray = await etherscanProvider.getHistory(contractAddress);
      const transactionArraySliced = transactionArray.slice(transactionArray.length - 101, transactionArray.length).reverse();
      // const transactionArraySliced = transactionArray.reverse();

      for (let i = 0; i < transactionArraySliced.length - 1; i++) {
        let txHash = transactionArraySliced[i].hash;
        let bNumber = transactionArraySliced[i].blockNumber;
        let timestampRaw = new Date(transactionArraySliced[i].timestamp * 1000).toISOString();
        // Remove the T, Z, and spaces to get date formatted
        let timestamp = timestampRaw.replace("T", " ").substring(0, timestampRaw.length - 5);

        // getTransaction has gasLimit, value, gasPrice; does not have timestamp, gasUsed
        const transactionResponse = await etherscanProvider.getTransaction(txHash);
        let dataEncoded = transactionResponse.data;
        let value = transactionResponse.value.toNumber();
        let gasLimit = transactionResponse.gasLimit.toNumber();
        let gasPrice =
          transactionResponse.gasPrice.toNumber() * Math.pow(10, -18);

        // getBlockWithTransactions(bNumber) has gasUsed but this is gas estimated before transaction - difference will be sent later. Use gasUsed from getTransactionReceiptgas instead
        // getTransactionReceipt has gasUsed, from, to, but no timestamp
        const transactionReceipt = await etherscanProvider.getTransactionReceipt(
          txHash
        );
        let from = transactionReceipt.from;
        let to = transactionReceipt.to;
        let status = transactionReceipt.status === 1 ? "Success" : "Failure";
        let gasUsed = Number(transactionReceipt.gasUsed);
        let zap = null;
        if (transactionReceipt.logs.length > 0) {
          zap = Number(transactionReceipt.logs[0].data) * Math.pow(10, -18);
          if (!zap) {
            zap = 0;
          }
        }

        let tokenTransfer = null;
        let txAction = null;

        let transactionFee = gasUsed * gasPrice;
        let gasInfo = `${gasUsed} Gas Used From ${gasLimit} Gas Limit @ ${gasPrice} ether (${Math.round(
          gasPrice * Math.pow(10, 9)
        )} gwei)`;

        transactions.push(new Transaction(
          txHash,
          bNumber,
          timestamp,
          status,
          from,
          to,
          dataEncoded,
          value,
          transactionFee,
          gasLimit,
          gasPrice,
          gasUsed,
          gasInfo,
          zap,
          txAction,
          tokenTransfer,
        ));
      }
      dispatch({ type: GET_TRANSACTIONS, payload: transactions });
      return transactions;
    } catch (error) {
      console.log('caught', error.message);
      //dispatch
      return error;
    }
  }
}

/**
 * To clear the transactions for refresh
 */
export function clearTransactions() {
   return {
      type: CLEAR_TRANSACTIONS,
      payload: null,
   };
}
