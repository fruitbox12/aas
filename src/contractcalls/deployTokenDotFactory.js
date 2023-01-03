import { ethers } from "ethers";

// Initialize Curve Function
export const deployTokenDotFactory = async (

    tokenDotFactoryContract,
    coordinator,
    factory,
    providerPubKey,
    providerTitle

) => {

    const providerTitleConverted = ethers.utils.formatBytes32String(providerTitle);

    const symbolConverted = ethers.utils.formatBytes32String(symbol);

    const deployTokenDotFactory = await tokenDotFactoryContract.initializeCurve(
        specifierConverted,
        symbolConverted,
        curve
    );

    return deployTokenDotFactory;

}