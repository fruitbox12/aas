import { ethers } from "ethers";
import { bondageAddress } from "src/contracts/bondagecontract.js";

const ten = ethers.BigNumber.from(10),
   mil = ethers.BigNumber.from(7);

const base = ten.pow(mil);
const defaultAmt = base.mul(ethers.constants.WeiPerEther);

/**
 *
 * Summary. Calls the Zap Token Contract to allow the spender to use the active wallet's Zap balance.
 *
 * Description. Takes in an instantiaed Zap Token Contract using ethers. Converts contract call arguments into bytes32 and
 * BigNumber. By default, allows the bondage contract to spend 10M Zap for the user to bond to endpoints.
 *
 * @param {Contract} erc20Token An instantiated Zap Token contract object using ethers
 * @param {String} [spenderAddress = 0x188f79B0a8EdC10aD53285c47c3fEAa0D2716e83] The address being allowed to spend the sender's Zap
 * @param {number} [amount = 10000000 Zap] The amount of wei Zap the user is allowing the spender to use
 */
export async function callApprove(
   erc20Token,
   spenderAddress = bondageAddress[1],
   amount = defaultAmt
) {
   try {
      var spender = spenderAddress;

      if (spender === bondageAddress[1]) {
         let chainId = await erc20Token.provider.getNetwork().then((resp) => {
            return resp.chainId;
         });
         spender = bondageAddress[chainId];
         // console.log("Chain ID: " + chainId);
      }

      const addressCoverted = ethers.utils.getAddress(spender),
         amtConverted = ethers.BigNumber.from(amount);

      let approveTsx = await erc20Token.functions.approve(
         addressCoverted,
         amtConverted
      );

      return approveTsx;
   } catch (e) {
      console.log("Issue with approve call");
      console.error(e);
   }
}
