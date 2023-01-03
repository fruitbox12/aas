import detectEthereumProvider from "@metamask/detect-provider";
import { zapTokenAddress } from "src/contracts/zaptokencontract.js";

/**
 * Summary. Uses implementations of EIP 474 to add ZAP to the active wallet's watch list
 *
 * Description. Requires web3 to be provided in some way. Detected by MetaMask's provider detector that works with most wallets/providers,
 * as described in EIP 1193.
 * Details about EIPs 747 and 1193 can be found at the provided links.
 *
 * @link https://eips.ethereum.org/EIPS/eip-747
 * @link https://eips.ethereum.org/EIPS/eip-1193
 *
 * @throws Error objects with specific messages about what went wrong.
 */
export const addZapToWallet = async () => {
   try {
      // Accesses window.ethereum in a convenient way
      const ethereum = await detectEthereumProvider();

      if (ethereum) {
         ethereum
            .request({
               method: "wallet_watchAsset",
               params: {
                  type: "ERC20",
                  options: {
                     address: zapTokenAddress[parseInt(window.ethereum.chainId)],
                     symbol: "ZAP",
                     decimals: 18,
                     image: "https://etherscan.io/token/images/zapstore_28.png",
                  },
               },
            })
            .then((success) => {
               if (success) {
                  console.log("ZAP was successfully added to the wallet.");
               } else {
                  throw new Error(
                     "ZAP could not be added to the wallet at this time."
                  );
               }
            })
            .catch(console.error);
      } else {
         throw console.error("Provider was not detected.");
      }
   } catch (e) {
      console.error(e);
   }
};
