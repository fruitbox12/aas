import { ethers } from "ethers";

/**
 *
 * Summary. Calls the Bondage Contract to get the number of dots issued by the specified endpoint.
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {string} providerAddress String of the address of the provider
 * @param {string} endpointName String of the name of the provider's endpoint
 * @return {?number} amount of dots issued by the endpoint
 */
export const callGetDotsIssued = async (
   bondageContract,
   providerAddress,
   endpointName
) => {
   try {
      const providerConverted = ethers.utils.getAddress(providerAddress),
         endptConverted = ethers.utils.formatBytes32String(endpointName);

      const raw = await bondageContract.getDotsIssued(
         providerConverted,
         endptConverted
      );
      const retVal = raw.toNumber();
      return retVal;
   } catch (e) {
      console.log("Issue with getDotsIssued call");
      console.error(e);
   }
   return null;
};
