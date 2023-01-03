import { ethers } from "ethers";
// import { convertToBigInt } from "src/utils/zapConversion.ts";

/**
 * 
 * Summary. Calls the Registry Contract to initiate the provider curve of the specified endpoint.
 * 
 * Description. Takes in an instantiaed Registry Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 * 
 * @param {Contract object} registryContract 
 * @param {string} endpointName  The name of the endpoint whose curve is to be initiated.
 * @param {Number array} curveArray The coefficient array of the curve as specified by the Zap documentation.
 * @param {string} brokerAddress The address of the broker specified by the user. If one is not give, then it is the 0 address by default.
 */
export const callInitiateProviderCurve = async (
   registryContract,
   endpointName,
   curveArray,
   brokerAddress = ethers.constants.AddressZero,
   gas
) => {
   const endpointNameConverted = ethers.utils.formatBytes32String(endpointName),
      // curveArrayConverted = curveArray.map((entry) =>
      //    ethers.BigNumber.from(entry)
      // ),
      brokerAddressConverted = ethers.utils.getAddress(brokerAddress);

   const initCurveTsx = await registryContract.initiateProviderCurve(
      endpointNameConverted,
      curveArray,
      brokerAddressConverted,
   );

   return initCurveTsx
};
