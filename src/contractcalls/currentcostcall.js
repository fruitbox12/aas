import { ethers } from "ethers";
// import { convertToBigInt } from "src/utils/zapConversion.ts";

/**
 *
 * Summary. Calls the Bondage Contract to determine the price of the nth dot
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract object} bondageContract
 * @param {String} oracleAddress  The name address of the Oracle/endpoint provider
 * @param {String} endpointName The name of the specific endpoint to bond to
 * @param {Number} numDots The number of dot to bond to check the price of.
 *
 * @returns amount of weiZap the dot is worth
 */
export const callCurrentCost = async (
   bondageContract,
   oracleAddress,
   endpointName,
   numDots
) => {
   try {
      const oracleAddressCoverted = ethers.utils.getAddress(oracleAddress),
         endpointNameConverted = ethers.utils.formatBytes32String(endpointName),
         numDotsConverted = ethers.BigNumber.from(numDots);
      // numDotsConverted = convertToBigInt(numDots);

      let costTsx = await bondageContract.currentCostOfDot(
         oracleAddressCoverted,
         endpointNameConverted,
         numDotsConverted
      );

      return parseFloat(costTsx.toString());
   } catch (err) {
      console.log("Issue with currentCostOfDot call");
      console.error(err);
   }
   return null;
};

/**
 *
 * Summary. Calls the Bondage Contract n times to determine the price of the n dots
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract object} currentCostContract
 * @param {String} oracleAddress  The name address of the Oracle/endpoint provider
 * @param {String} endpointName The name of the specific endpoint to bond to
 * @param {Number} numDots The number of dots to bond to
 * @param {Number} dotsIssued The number of dots bound to the curve
 *
 * @returns amount of weiZap the dots are worth
 */
export async function multiBondCost(
   currentCostContract,
   oracleAddress,
   endpointName,
   dotsIssued,
   numDots
) {
   try {
      const oracleAddressCoverted = ethers.utils.getAddress(oracleAddress),
         endpointNameConverted = ethers.utils.formatBytes32String(endpointName),
         nDotsConverted = ethers.BigNumber.from(numDots - 1),
         startConverted = ethers.BigNumber.from(dotsIssued + 1);

      const costCall = await currentCostContract._costOfNDots(
         oracleAddressCoverted,
         endpointNameConverted,
         startConverted,
         nDotsConverted
      );

      return parseFloat(costCall.toString());
   } catch (err) {
      console.log("Computing multi dot bondage cost");
      console.error(err);
   }
   return null;
}

/**
 *
 * Summary. Calls the Bondage Contract n times to determine the price of the n dots
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract object} currentCostContract
 * @param {String} oracleAddress  The name address of the Oracle/endpoint provider
 * @param {String} endpointName The name of the specific endpoint to bond to
 * @param {Number} numDots The number of dots to bond to
 * @param {Number} dotsIssued The number of dots bound to the curve
 *
 * @returns amount of weiZap the dots are worth
 */
 export async function multiUnbondGain(
   currentCostContract,
   oracleAddress,
   endpointName,
   dotsIssued,
   numDots
) {
   try {
      const oracleAddressCoverted = ethers.utils.getAddress(oracleAddress),
         endpointNameConverted = ethers.utils.formatBytes32String(endpointName),
         nDotsConverted = ethers.BigNumber.from(numDots - 1),
         startConverted = ethers.BigNumber.from(dotsIssued + 1 - numDots);

      const costCall = await currentCostContract._costOfNDots(
         oracleAddressCoverted,
         endpointNameConverted,
         startConverted,
         nDotsConverted
      );

      return parseFloat(costCall.toString());
   } catch (err) {
      console.log("Computing multi dot unbond gain");
      console.error(err);
   }
   return null;
}
