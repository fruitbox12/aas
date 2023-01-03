/**
 * @param {String} oracleTitle The name of the oracle
 * @param {String} oracleAddress The address of the oracle contract
 * @param {String} oracleParams The parameters of the provider
 * @param {Boolean} brokerAddress Is the provider using a brooker?
 * @param {Array} coeffecientArr The coefficients of the curve formula as specified in the docs
 * @param {String} endpointName Name of this specific endpoint/oracle
 * @param {Number} dotsBounded The amount of DOTS bound to an endpoint
 * @param {Number} dotsIssued The amount of DOTS issued to an endpoint
 * @param {Number} dotLimit The max amount of DOTS that can be bound to an endpoint
 * @param {Number} pricePerDot The price of each DOT bound to an endpoint
 * @param {string} markdownLink
 * @param {string} jsonSchema
 */
export function Oracle(
   oracleTitle,
   oracleAddress,
   oracleParams,
   brokerAddress,
   coeffecientArr,
   endpointName,
   dotsBounded,
   dotsIssued,
   dotLimit,
   pricePerDot,
   markdownLink,
   jsonSchema,
   userDots,
   zapBound,
   isToken,
   symbol,
   tokenAdd,
   tknBal,
   isTDFOwner
) {
   this.oracleTitle = oracleTitle;
   this.oracleAddress = oracleAddress;
   this.oracleParams = oracleParams;
   this.brokerAddress = brokerAddress;
   this.coeffecientArr = coeffecientArr;
   this.endpointName = endpointName;
   this.dotsBounded = dotsBounded;
   this.dotsIssued = dotsIssued;
   this.dotLimit = dotLimit;
   this.pricePerDot = pricePerDot;
   this.markdownLink = markdownLink;
   this.jsonSchema = jsonSchema;
   this.userDots = userDots;
   this.zapBound = zapBound;
   this.isToken = isToken;
   this.symbol = symbol;
   this.tokenAdd = tokenAdd;
   this.tknBal = tknBal;
   this.isTDFOwner = isTDFOwner;
}
