import { useState, useEffect } from "react";
import axios from "axios";
import { ZAP_CONTRACT } from "../constants/contracts";

/**
 * Get CoinGecko conversions rate from ZAP to USD and ETH
 * @return {[{int, int}, Boolean, Boolean]}
 *    index 0: object of `toUsd` and `toEth` of ZAP
 *    index 1: boolean if there's an error with the API call
 *    index 2: boolean if the API call is still being processed
 */
const useZapPrices = function() {
   const [zapPrices, setZapPrices] = useState({
      toUsd: 0,
      toEth: 0,
   });
   const [zapPriceError, setError] = useState(false);
   const [zapPriceLoading, setLoading] = useState(true);

   async function getZapPrices() {
      try {
         setLoading(true);
         const price = await getPrices();
         setZapPrices(price);
      } catch (e) {
         setError(e);
         console.error(
            "%cThere was an issue with the API request. \n",
            "font-size: 18px; font-weight: bold",
            e
         );
      } finally {
         setLoading(false);
      }
   }
   useEffect(() => {
      // const interval = setInterval(() => {
      //    getZapPrices();
      // }, 180000);
      // return () => clearInterval(interval);
      getZapPrices();
   }, []);

   // return [zapPrices, zapPriceError, zapPriceLoading];
   return {
      prices: zapPrices,
      error: zapPriceError,
      loading: zapPriceLoading,
   };
};

// Quaries CoinGecko's v3 API for the USD and ETH prize of 1 ZAP
export const getPrices = async function() {
   const url =
      "https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=" +
      ZAP_CONTRACT +
      "&vs_currencies=usd%2Ceth";

   const response = axios.get(url);

   var unpacked = await response.then((response) => {
      const vals = response.data[ZAP_CONTRACT];
      return {
         toUsd: vals.usd,
         toEth: vals.eth,
      };
   });

   // console.log(
   //    "%c1 ZAP to USD " + unpacked.toUsd,
   //    "font-size: 18px; font-weight: bold"
   // );

   // console.log(
   //    "%c1 ZAP to ETH " + unpacked.toEth,
   //    "font-size: 18px; font-weight: bold"
   // );

   // console.log(
   //    "%c1 ETH to USD " + unpacked.toUsd / unpacked.toEth,
   //    "font-size: 18px; font-weight: bold"
   // );

   // console.log("%cCoversion Source: \n" + url, "font-size: 8px; font-weight: bold");

   if (typeof unpacked.toUsd != "number" || typeof unpacked.toEth != "number") {
      unpacked = parseFloat(unpacked);
   }

   return unpacked;
};

export default useZapPrices;
