import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * Get a QR code containing the ETH address you need
 * @param  {String} address The ETH address you want a qr code for
 * @return {[Element, Boolean, Boolean]}  
 *    index 0: img tag containging the QR code
 *    index 1: boolean if there's an error with the API call
 *    index 2: boolean if the API call is still being processed
 */
const useQrCode = function(address) {
   const [qrCodeTag, setQr] = useState(null);
   const [qrError, setError] = useState(false);
   const [qrLoading, setLoading] = useState(true);

   async function getQrCode() {
      try {
         setLoading(true);
         const code = await getCode(address);
         setQr(code);
      } catch (e) {
         setError(e);
         console.error(
            "%cThere was an issue with the API request to get your QR code. \n",
            "font-size: 18px; font-weight: bold",
            e
         );
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getQrCode();
   }, []);

   return [qrCodeTag, qrError, qrLoading];
};

// Quaries Google's Charts API for a QR code that encode `address`
export const getCode = async function(address) {
   const url =
      "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=ethereum:" +
      address +
      "&choe=UTF-8";

   const response = axios.get(url, { responseType: "arraybuffer" });

   let unpacked = await response.then((response) =>
      Buffer.from(response.data, "binary").toString("base64")
   );

   const tag = <img src={`data:image/png;base64,` + unpacked} />;

   // console.log("%cQR Generator: \n" + url, "font-size: 8px; font-weight: bold");

   return tag;
};

export default useQrCode;
