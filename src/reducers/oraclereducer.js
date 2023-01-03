/* eslint-disable no-param-reassign */
import produce from "immer";
import {
   GET_ORACLES,
   CLEAR_ORACLES,
   GET_ORACLES_ERROR,
   UPDATE_ORACLE,
   UPDATE_ORACLE_ERROR,
   UPDATE_TVL,
   UPDATE_VOLUME,
   UPDATE_VOLUME_ERROR,
   RESET_MARKET,
} from "src/actions/oracleactions";
//import { oracleStateArchive } from "src/constants/oracleStateArchive.js";

/**
 * in the oracles object:
 *    key: provider address + endpoint name
 *    value: Oracle object
 */
const initialState = {
   oracles: {},
   totalVolumeLocked: 0,
   totalVolumeTraded: 0,
   lastAction: "",
};

/**
 *
 * @param {Object} state The current state of the application in the Redux store
 * @param {Object} action The object of the "type" of state change happening and data to be changed
 *
 * This is the reducer for the oracles in the Redux pattern.
 */
const oracleReducer = (state = initialState, action) => {
   switch (action.type) {
      // When the oracles are loaded from the blockchain into the Dapp
      case GET_ORACLES: {
         const oracles = action.payload;
         return produce(state, (draft) => {
            oracles.forEach((element) => {
               // Concatenate the address and endpoint name to give each Oracle endpoint object a unique key
               // Allows endpoints that share the same address to populate
               draft.oracles[
                  element.oracleAddress + element.endpointName
               ] = element;
            });
            draft.lastAction = GET_ORACLES;
         });
      }

      case UPDATE_ORACLE: {
         const oracle = action.payload;
         return produce(state, (draft) => {
            // Concatenate the address and endpoint name to give each Oracle endpoint object a unique key
            // Allows endpoints that share the same address to populate
            draft.oracles[oracle.oracleAddress + oracle.endpointName] = oracle;
            draft.lastAction = UPDATE_ORACLE;
         });
      }

      // When the total volume locked is updated
      case UPDATE_TVL: {
         const vol = action.payload;
         return produce(state, (draft) => {
            draft.totalVolumeLocked = vol;
            draft.lastAction = UPDATE_TVL;
         });
      }

      // When the total volume traded is updated
      case UPDATE_VOLUME: {
         const vol = action.payload;
         return produce(state, (draft) => {
            draft.totalVolumeTraded = vol;
            draft.lastAction = UPDATE_VOLUME;
         });
      }

      // When the oracles need to be reloaded
      case CLEAR_ORACLES: {
         return produce(state, (draft) => {
            draft.oracles = [];
            draft.lastAction = CLEAR_ORACLES;
         });
      }

      case RESET_MARKET: {
         console.log("reset");
         return { ...initialState, lastAction: RESET_MARKET };
      }

      case GET_ORACLES_ERROR:
         case UPDATE_ORACLE_ERROR:
         case UPDATE_VOLUME_ERROR:
            return { ...state, lastAction: action.type }; 

      // The reducer is called but no "type" or an error type was given to the action
      default: {
         return state;
      }
   }
};

export default oracleReducer;
