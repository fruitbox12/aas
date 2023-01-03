/**
 * @param {String} oracleAddress The address of the oracle bonded to
 * @param {Number} dots Number of dots bonded to
 */
export function BondedOracle(oracleAddress, dots) {
   this.oracleAddress = oracleAddress;
   this.dots = dots
}
