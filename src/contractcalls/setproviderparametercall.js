import { ethers } from "ethers";

export const callSetProviderParameter = async (
   registryInstance,
   key,
   value,
   gas
) => {
   const valueConverted = ethers.utils.toUtf8Bytes(value);
   const bytes = ethers.utils.hexlify(valueConverted);

   const setParameterTsx = await registryInstance.setProviderParameter(
      key,
      bytes,
   );

   return setParameterTsx;
};
