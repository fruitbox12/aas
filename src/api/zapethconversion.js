import { useState, useEffect } from "react";
import axios from "axios";

const useZapToEth = () => {
   const [zapEthPrice, setZapPrice] = useState(0);
   const [zapEthError, setZapError] = useState(false);
   const [zapEthLoading, setZapLoading] = useState(true);

   async function getZapPrice() {
      try {
         setZapLoading(true);
         const price = await getPrices();
         setZapPrice(price);
      } catch (e) {
         setZapError(e);
      } finally {
         setZapError(false);
      }
   }
   useEffect(() => {
      getZapPrice();
   }, []);

   return [zapEthPrice, zapEthError, zapEthLoading];
};

// Quaries CoinGecko's v3 API for the ETH price of 1 ZAP
const getPrices = async function() {
   let response = axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=zap&vs_currencies=eth"
   );

   let unpacked = await response.then((response) => {
      // console.log("%c In unpacking: " + response.data.ethereum.eth, "font-size: 36px; font-weight: bold");
      return response.data.zap.eth;
   });

   // console.log(
   //    "%c ZAP to ETH: " + unpacked,
   //    "font-size: 18px; font-weight: bold"
   // );

   return unpacked;
};

export default useZapToEth;
