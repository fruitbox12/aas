import { ethers } from "ethers";

// Initialize Curve Function
export const callInitializeCurve = async (

    tokenDotFactoryContract,
    specifier,
    symbol,
    curve

) => {

    const specifierConverted = ethers.utils.formatBytes32String(specifier);

    const symbolConverted = ethers.utils.formatBytes32String(symbol);
    console.log("I'm here in contract call", specifierConverted, symbolConverted)
    const initCurveTx = await tokenDotFactoryContract.initializeCurve(
        specifierConverted,
        symbolConverted,
        curve
    );

    return initCurveTx;

}