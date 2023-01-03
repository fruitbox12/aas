import { ethers } from "ethers";

/**
 *
 * Summary. Calls the Bondage Contract to get the number of dots bound to the specified endpoint.
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {string} holderAddress String of the address of the holder
 * @param {string} providerAddress String of the address of the provider
 * @param {string} endpointName String of the name of the provider's endpoint
 * @return {?number} amount of dots held by the holder
 */
export const callGetBoundDots = async (
   bondageContract,
   holderAddress,
   providerAddress,
   endpointName
) => {
   try {
      const holderConverted = ethers.utils.getAddress(holderAddress),
         providerConverted = ethers.utils.getAddress(providerAddress),
         endptConverted = ethers.utils.formatBytes32String(endpointName);

      const raw = await bondageContract.getBoundDots(
         holderConverted,
         providerConverted,
         endptConverted
      );

      const retVal = raw.toNumber();
      return retVal;
   } catch (e) {
      console.log("Issue with getBoundDots call");
      console.error(e);
   }
   return null;
};
