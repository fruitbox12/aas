import { useEffect } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { registryAbi, registryAddress } from "../contracts/registrycontract.js";
import { bondageAbi, bondageAddress } from "src/contracts/bondagecontract.js";
import {
   zapTokenAbi,
   zapTokenAddress,
} from "src/contracts/zaptokencontract.js";
import {
   tokenDotFactoryAbi,
   tokenDotFactoryAddress,
} from "../contracts/generictokenfactorycontract.js";
import { tokenDFFAddress, tokenDFFAbi } from "../contracts/tokenFFContract";
import {
   currentCostAddress,
   currentCostAbi,
} from "src/contracts/currentcost.js";

export function useContracts() {
   const { library, chainId } = useWeb3React();
   useEffect(() => {}, []);
   try {
      const ETHERprovider = new ethers.providers.Web3Provider(library.provider);
      const signer = ETHERprovider.getSigner();

      let registryInstance = registryAddress[chainId]
         ? new ethers.Contract(registryAddress[chainId], registryAbi, signer)
         : null;

      let bondageInstance = bondageAddress[chainId]
         ? new ethers.Contract(bondageAddress[chainId], bondageAbi, signer)
         : null;

      let zapTokenInstance = zapTokenAddress[chainId]
         ? new ethers.Contract(zapTokenAddress[chainId], zapTokenAbi, signer)
         : null;

      let genTokenFactoryInstance = tokenDotFactoryAddress[chainId]
         ? new ethers.Contract(
              tokenDotFactoryAddress[chainId],
              tokenDotFactoryAbi,
              signer
           )
         : null;

      let tokenDFFInstance = tokenDFFAddress[chainId]
         ? new ethers.Contract(tokenDFFAddress[chainId], tokenDFFAbi, signer)
         : null;

      let currentCostInstance = currentCostAddress[chainId]
         ? new ethers.Contract(
              currentCostAddress[chainId],
              currentCostAbi,
              signer
           )
         : null;

      return {
         signer: signer,
         chainId: chainId,
         bondage: bondageInstance,
         registry: registryInstance,
         zapToken: zapTokenInstance,
         genTokenFactory: genTokenFactoryInstance,
         tokenDFF: tokenDFFInstance,
         currentCost: currentCostInstance,
      };
   } catch (e) {
      console.error(e);
      console.log("There's an issue connecting to the smart contracts.");
      return {
         signer: null,
         chainId: null,
         bondage: null,
         registry: null,
         zapToken: null,
         genTokenFactory: null,
         tokenDFF: null,
         currentCost: null,
      };
   }
}
