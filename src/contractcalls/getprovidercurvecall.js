import { ethers } from "ethers";

/**
 *
 * Summary. Calls the Bondage Contract to get the curve of the specified endpoint.
 *
 * Description. Takes in an instantiaed Registry Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract} registryContract An instantiated registry contract object using ethers
 * @param {string} providerAddress String of the address of the provider
 * @param {string} endpointName String of the name of the provider's endpoint
 * @return {?number[]} the dot limit of the specified endpoint
 */
export const callGetProviderCurve = async (
   registryContract,
   providerAddress,
   endpointName
) => {
   try {
      const providerConverted = ethers.utils.getAddress(providerAddress),
         endptConverted = ethers.utils.formatBytes32String(endpointName);

      const raw = await registryContract.getProviderCurve(
         providerConverted,
         endptConverted
      );
      const retVal = raw.map((num) => num.toNumber());
      return retVal;
   } catch (e) {
      console.log("Issue with dotLimit call");
      console.error(e);
   }
   return null;
};
