/* eslint-disable no-param-reassign */
import produce from "immer";
import { GET_TRANSACTIONS, CLEAR_TRANSACTIONS } from "src/actions/transactionActions"; 
import { transactionStateArchive } from "src/constants/transactionStateArchive.js";


/**
 * key: transaction hash of the Transaction class
 * value: JS object of Transaction
 */
const initialState = {
  transactions: {},
};
initialState.transactions = transactionStateArchive;

/**
 * @param {Object} state The current state of the application in the Redux store
 * @param {Object} action The object of the "type" of state change happening and data to be changed
 */
const transactionReducer = (state = initialState, action) => {
   switch (action.type) {
      // When pulling transactions from blockchain
      case GET_TRANSACTIONS: {
         const transactions = action.payload;
         return produce(state, (draft) => {
            transactions.forEach(element => {
               draft.transactions[element.txHash] = element
            });
            // draft.transactions = transactions;
         });
      }

      // When the transactions need to be reloaded
      case CLEAR_TRANSACTIONS: {
         return produce(state, (draft) => {
           draft.transactions = {};
         });
      }

      // The reducer is called but no "type" was given to the action
      default: {
         return state;
      }
   }
};

export default transactionReducer;
