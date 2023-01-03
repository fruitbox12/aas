import { ethers } from "ethers";

export const callSetEndpointParams = async (
   registryInstance,
   endpoint,
   params,
   gas
) => {
   const endpointConverted = ethers.utils.formatBytes32String(endpoint);

   const setEndpointParamsTsx = await registryInstance.setEndpointParams(
      endpointConverted,
      params,
   );
   return setEndpointParamsTsx;
};
