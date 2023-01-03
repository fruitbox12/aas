import { useState, useEffect } from "react";
import axios from "axios";

const use24HrBlock = () => {
   const [blockHash, setBlockHash] = useState(0);
   const [hashError, setHashError] = useState(false);
   const [hashLoading, setHashLoading] = useState(true);

   const currentTime = Math.round(Date.now() / 1000),
      day = 86400; // 1 day in epoch time

   const prevDay = currentTime - day;

   async function getBlock() {
      try {
         setHashLoading(true);
         const hash = await blockFromEtherScan(prevDay);
         setBlockHash(hash);
      } catch (e) {
         setHashError(e);
      } finally {
         setHashError(false);
         setHashLoading(false);
      }
   }
   useEffect(() => {
      getBlock();
      // eslint-disable-next-line
   }, []);

   // return [blockHash, hashError, hashLoading];
   return {
      hash: blockHash,
      error: hashError,
      loading: hashLoading,
   };
};

// Quaries CoinGecko's v3 API for the USD price of 1 ETH
export const blockFromEtherScan = async function(time) {
   const url =
      "https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=" +
      time +
      "&closest=before&apikey=5UEMBTDRSINPPF47V59NTBTZR6KJPUDQ8W";

   console.log(url);

   let response = axios.get(url);

   let unpacked = response.then((resp) => {
      // console.log(
      //    "%c In unpacking: " + resp.data.result,
      //    "font-size: 36px; font-weight: bold"
      // );
      return parseInt(resp.data.result);
   });

   return unpacked;
};

export default use24HrBlock;
