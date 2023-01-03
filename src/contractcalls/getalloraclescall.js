/**
 *
 * Summary. Calls the Registry Contract to get the addresses of all the Zap oracle providers.
 *
 * Description. Takes in an instantiaed Registry Contract using ethers. 
 *
 * @param {Contract} registryContract An instantiated registry contract object using ethers
 * @returns {?string[]} An array of all the provider addresses 
 */
export const callGetAllOracles = async (registryContract) => {
   try {
      const retVal = await registryContract.getAllOracles();
      return retVal;
   } catch (e) {
      console.log("Issue with getAllOracles call");
      console.error(e);
   }
   return null;
};
