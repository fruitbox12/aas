import { ethers } from "ethers";
import { bondageAddress } from "src/contracts/bondagecontract.js";

/**
 *
 * Summary. Calls the Zap Token Contract to see how much the spender can still use of the active wallet's Zap balance.
 *
 * Description. Takes in an instantiaed Zap Token Contract using ethers. Converts contract call arguments into bytes32 and
 * BigNumber.
 *
 * @param {Contract} erc20Token An instantiated Zap Token contract object using ethers
 * @param {string} [spenderAddress = 0x188f79B0a8EdC10aD53285c47c3fEAa0D2716e83] The address being allowed to spend the owner's Zap
 * @param {string} [ownerAddress = window.ethereum.selectedAddress] The address of the token owner
 * @returns {number} the amount left spendable by the spender
 */
export const callAllowance = async (
   erc20Token,
   spenderAddress = bondageAddress[1],
   ownerAddress
) => {
   try {
      var ownerConverted = "";

      if (!ownerAddress) {
         ownerConverted = ethers.utils.getAddress(
            window.ethereum.selectedAddress
         );
      } else {
         ownerConverted = ethers.utils.getAddress(ownerAddress);
      }

      var spender = spenderAddress;

      if (spender === bondageAddress[1]) {
         let chainId = await erc20Token.provider.getNetwork().then((resp) => {
            return resp.chainId;
         });
         spender = bondageAddress[chainId];
      }

      const spenderConverted = ethers.utils.getAddress(spender);

      const allowanceView = await erc20Token
         .allowance(ownerConverted, spenderConverted)
         .then((resp) => {
            return resp.toString();
         });

      return parseFloat(allowanceView);
   } catch (e) {
      console.log("Issue with allowance call");
      console.error(e);
   }
   return null;
};
