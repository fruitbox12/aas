import { ethers } from "ethers";
import { TOKEN_DOT_FACTORY } from "src/views/tokenwizard/artifacts";

/**
 *
 * Summary. Calls the Bondage Contract to bond to the specified endpoint.
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract object} bondageContract
 * @param {String} oracleAddress  The name address of the Oracle/endpoint provider
 * @param {String} endpointName The name of the specific endpoint to bond to
 * @param {Number} numDots The number of dots to bond to.
 */
export async function callBond(
   bondageContract,
   oracleAddress,
   endpointName,
   numDots, 
   isToken,
   signer
) {
   if (isToken){
      const endpointNameConverted = ethers.utils.formatBytes32String(endpointName);
      const numDotsConverted = ethers.BigNumber.from(numDots);
      const Instance = new ethers.Contract(
         oracleAddress,
         TOKEN_DOT_FACTORY[0].abi,
         signer
      )
      try {
         const bondTsx = Instance.functions.bond(endpointNameConverted, numDotsConverted)
         return bondTsx
      }catch (e) {
         console.log("Issue with bond call");
         console.error(e);
      }
   }
   else{
      try {
         const oracleAddressCoverted = ethers.utils.getAddress(oracleAddress),
            endpointNameConverted = ethers.utils.formatBytes32String(endpointName),
            numDotsConverted = ethers.BigNumber.from(numDots);
   
         console.log(numDots.toString());
         const bondTsx = await bondageContract.functions.bond(
            oracleAddressCoverted,
            endpointNameConverted,
            numDotsConverted
         );
         return bondTsx;
      } catch (e) {
         console.log("Issue with bond call");
         console.error(e);
      }
   }
}
