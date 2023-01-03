/* eslint-disable no-param-reassign */
import produce from "immer";
import {
   CONNECT_USER,
   GET_WALLET,
   GET_BONDED_ORACLES,
   END_SESSION
} from "src/actions/useractions";

/**
 * address: The address of the active wallet
 * provider: Is the connected and active user a provider?
 * bondedTo: The list of oracles the current active wallet is bonded to (key: oracle address, value: an instance or Oracle)
 * ethBalance: The amount of ETH in the active wallet
 * zapBalance: The amount of ZAP in the active wallet
 */
const initialState = {
   user: {
      address: "",
      provider: false,
      publicKey: 0,
      bondedTo: {},
      ethBalance: 0,
      zapBalance: 0,
   },
};

/**
 *
 * @param {Object} state The current state of the application in the Redux store
 * @param {Object} action The object of the "type" of state change happening and data to be changed
 *
 * This is the reducer for the oracles in the Redux pattern.
 *
 */
const userReducer = (state = initialState, action) => {
   switch (action.type) {

      // When the wallet connects to the Dapp for web3 injection
      case CONNECT_USER: {
         console.log("Connect");
         const user = action.payload;
         return produce(state, (draft) => {
            draft.user = { ...state.user, ...user };
         });
      }

      // GEet their ETH and ZAP balance
      case GET_WALLET: {
         const wallet = action.payload;
         return produce(state, (draft) => {
            console.log(wallet);
            draft.user = { ...draft.user, ...wallet };
         });
      }

      // Get the list of oracles the user bonded to and how many dots
      case GET_BONDED_ORACLES: {
         const bondedTo = action.payload;
         return produce(state, (draft) => {
            bondedTo.forEach(element => {
               draft.user.bondedTo[element.oracleAddress] = element
            });
         });
      }

      // When the wallet connects to the Dapp for web3 injection
      case END_SESSION: {
         return initialState
      }

      // The reducer is called but no "type" was given to the action
      default: {
         return state;
      }
   }
};

export default userReducer;
