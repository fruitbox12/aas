// Initialize new token function
export const callNewToken = async (
   tokenDotFactoryContract,
   tokenName,
   symbol
) => {
   const newTokenTx = await tokenDotFactoryContract.newToken(tokenName, symbol);

   return newTokenTx;
};
