import { useState, useEffect } from "react";
import axios from "axios";

const useIpfsFile = (link) => {
   const [file, setFile] = useState("");
   const [fileError, setFileError] = useState(false);
   const [fileLoading, setFileLoading] = useState(true);

   async function getFile() {
      try {
         setFileLoading(true);
         const file = await fileFromLink(link);
         if (file.status >= 400) {
            setFileError(true);
            setFileLoading(false);
            return;
         }
         setFile(file.data);
      } catch (e) {
         setFileError(e);
      } finally {
         setFileError(false);
         setFileLoading(false);
      }
   }
   useEffect(() => {
      getFile();
      // eslint-disable-next-line
   }, []);

   return {
      file: file,
      error: fileError,
      loading: fileLoading,
   };
};

// Quaries CoinGecko's v3 API for the USD price of 1 ETH
export const fileFromLink = async function(url) {
   let response = await axios.get(url);

   // console.log(response);

   return response;
};

export default useIpfsFile;
