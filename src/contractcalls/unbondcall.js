import { ethers } from "ethers";
import { TOKEN_DOT_FACTORY } from "src/views/tokenwizard/artifacts";
// import Web3 from "web3";

/**
 *
 * Summary. Calls the Bondage Contract to unbond from the specified endpoint.
 *
 * Description. Takes in an instantiaed Bondage Contract using ethers. Converts contract call arguments into bytes32 and BigNumber.
 *
 * @param {Contract object} bondageContract
 * @param {String} oracleAddress  The name address of the Oracle/endpoint provider
 * @param {String} endpointName The name of the specific endpoint to unbond from
 * @param {Number} numDots The number of dots to unbond
 */
export async function callUnbond(
   bondageContract,
   oracleAddress,
   endpointName,
   numDots,
   isToken,
   signer,
   account,
   tokenContract
) {
   if (isToken){
      const endpointNameConverted = ethers.utils.formatBytes32String(endpointName);
      const numDotsConverted = ethers.BigNumber.from(numDots);
      const oracleAddressConverted = ethers.utils.getAddress(oracleAddress)
      const accountAddressConverted = ethers.utils.getAddress(account)
      const balance = await tokenContract.balanceOf(accountAddressConverted);
      const Instance = new ethers.Contract(
         oracleAddressConverted,
         TOKEN_DOT_FACTORY[0].abi,
         signer
      )
      
      try {
         // unbond(bytes32 specifier, uint numDots)
         // await tokenContract.functions.approve(oracleAddressConverted, balance);
         const unbondTsx = Instance.functions.unbond(endpointNameConverted, numDotsConverted);

         return unbondTsx
      }catch (e) {
         console.log("Issue with unbond call");
         console.error(e);
      }
   }else{
      try {
         const oracleAddressCoverted = ethers.utils.getAddress(oracleAddress),
            endpointNameConverted = ethers.utils.formatBytes32String(endpointName),
            numDotsConverted = ethers.BigNumber.from(numDots);
   
         const unbondTsx = await bondageContract.functions.unbond(
            oracleAddressCoverted,
            endpointNameConverted,
            numDotsConverted
         );
         return unbondTsx;
      } catch (e) {
         console.log("Issue with unbond call");
         console.error(e);
      }
   }
}
