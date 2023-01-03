import { ethers } from "ethers";

/**
 *
 * Summary. Calls the Registry Contract to get the list of endpoints.
 *
 * Description. Takes in an instantiaed Registry Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract} registryContract An instantiated registry contract object using ethers
 * @param {string} providerAddress String of the address of the provider whose title you are looking for
 * @return {?string[]} array of endpoint names of the specified provider as bytes32
 */
export const callGetProviderEndpoints = async (
   registryContract,
   providerAddress
) => {
   try {
      const raw = await registryContract.getProviderEndpoints(providerAddress);
      const retVal = raw.map((endpt) => ethers.utils.parseBytes32String(endpt));
      return retVal;
   } catch (e) {
      console.log("Issue with getTitle call");
      console.error(e);
   }
   return null;
};
