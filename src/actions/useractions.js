import { BondedOracle } from "src/reducers/classes/bondedoracledata.js";
export const CONNECT_USER = "@user/connect-user";
export const GET_WALLET = "@user/get-wallet";
export const GET_BONDED_ORACLES = "@user/get-bonded-oracles";
export const END_SESSION = "@user/end-session";

/**
 * For when the user wants to access the dashboard. Saves their web3 session locally.
 */
export function connectUser() {
   /**
    * Insert web 3 call here?
    */

   const address = "0x089";
   return {
      type: CONNECT_USER,
      payload: { address: address },
   };
}

/**
 * Get the ETH and ZAP balance of the active wallet
 */
export function getWallet() {
   /**
    * Insert web 3 call here?
    */

   const eth = 88;
   const zap = 888;
   return {
      type: GET_WALLET,
      payload: { ethBalance: eth, zapBalance: zap },
   };
}

/**
 * Get the list of oracels the user has bonded to
 */
export function getBondedOracles() {
   /**
    * Insert web 3 call here?
    */

   const bondedTo = [new BondedOracle("0x0", 0), new BondedOracle("0x1", 1)];

   return {
      type: GET_BONDED_ORACLES,
      payload: bondedTo,
   };
}

/**
 * Remove the information from the session
 */
export function endSession() {
   return {
      type: END_SESSION,
      payload: null,
   };
}
