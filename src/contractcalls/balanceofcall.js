import { ethers } from "ethers";
//import { bondageAddress } from "src/contracts/bondagecontract.js";

/**
 *
 * Summary. Calls the Zap Token Contract to see how much Zap is associated with the address.
 *
 * Description. Takes in an instantiaed Zap Token Contract using ethers. Converts contract call arguments into bytes32 and
 * BigNumber.
 *
 * @param {Contract} ZapToken An instantiated Zap Token contract object using ethers
 * @param {string} [ownerAddress = window.ethereum.selectedAddress] The address of the token owner
 * @returns {number} the amount left spendable by the spender
 */
export const callBalanceOf = async (zapToken, ownerAddress) => {
   try {
      var ownerConverted = "";

      if (!ownerAddress) {
         ownerConverted = ethers.utils.getAddress(
            window.ethereum.selectedAddress
         );
      } else {
         ownerConverted = ethers.utils.getAddress(ownerAddress);
      }

      var allowanceView = await zapToken
         .balanceOf(ownerConverted)
         .then((resp) => {
            return resp.toString();
         });

      allowanceView =
         parseFloat(allowanceView) /
         parseFloat(ethers.constants.WeiPerEther.toString());

      return parseFloat(allowanceView);
   } catch (e) {
      console.log("Issue with allowance call");
      console.error(e);
   }
   return null;
};
