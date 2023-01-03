import { ethers } from "ethers";

export const callInitProvider = async (

    registryInstance,
    publicKey,
    title,
    gas

) => {

    publicKey = ethers.utils.toUtf8Bytes(publicKey);

    publicKey = ethers.utils.hexlify(publicKey);

    publicKey = publicKey.split('');

    publicKey.splice(0, 44);

    publicKey = publicKey.join('');

    const titleConverted = ethers.utils.formatBytes32String(title);

    const initProviderTsx = await registryInstance.initiateProvider(
        publicKey,
        titleConverted
    );

    return initProviderTsx;

}


