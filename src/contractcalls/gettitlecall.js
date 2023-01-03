import { ethers } from "ethers";

/**
 *
 * Summary. Calls the Registry Contract to get the title of the specified address.
 *
 * Description. Takes in an instantiaed Registry Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract} registryContract An instantiated registry contract object using ethers
 * @param {string} providerAddress String of the address of the provider whose title you are looking for
 * @return {?string} string of the provider's title
 */
export const callGetTitle = async (registryContract, providerAddress) => {
   try {
      const providerConverted = ethers.utils.getAddress(providerAddress);
      const retVal = await registryContract.getTitle(providerConverted);
      return ethers.utils.parseBytes32String(retVal);
   } catch (e) {
      console.log("Issue with getTitle call");
      console.error(e);
   }
   return null;
};
