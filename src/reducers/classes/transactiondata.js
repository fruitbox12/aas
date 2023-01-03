/**
 * @param {Number} txHash Unique identifier of this transaction
 * @param {Number} bNumber The block number of this transaction in which transaction was recorded
 * @param {String} timestamp The date and time of mining the transaction (UTC)
 * @param {Number} status The status of the transaction (1 success; 0 failure)
 * @param {String} from The address of the sending party of the transaction
 * @param {String} to The address of the receiving party of the transaction (bonding contract in our case)
 * @param {Object} dataEncoded Encoded data that contains information about oracle name, tokens transferred, etc.
 * @param {Number} value Value being transacted (Always 0 for bonding contract)
 * @param {Number} transactionFee Amount paid to miner for processing transaction (Gas Price * Gas Used, in ether)
 * @param {Number} gasLimit Maximum amount of gas provided for transaction (units of gas)
 * @param {Number} gasPrice The cost per unit of gas specified for transaction (ether)
 * @param {Number} gasUsed The exact units of gas used by transaction (units of gas)
 * @param {string} gasInfo Information about gas useage
 * @param {Number} zap Amount of zap transferred
 * @param {string} txAction Summary of transaction
 * @param {string} tokenTransfer List of tokens transferred in transaction
 */
export function Transaction(
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
) {
   this.txHash = txHash;
   this.bNumber = bNumber;
   this.timestamp = timestamp;
   this.status = status;
   this.from = from;
   this.to = to;
   this.dataEncoded = dataEncoded;
   this.value = value;
   this.transactionFee = transactionFee;
   this.gasLimit = gasLimit;
   this.gasPrice = gasPrice;
   this.gasUsed = gasUsed;
   this.gasInfo = gasInfo;
   this.zap = zap;
   this.txAction = txAction;
   this.tokenTransfer = tokenTransfer;
}
