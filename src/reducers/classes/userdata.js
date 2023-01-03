/**
 *
 * @param {String} userAddress The address of the current active wallet
 * @param {Boolean} provider Is the user a provider?
 */
export function User(userAddress, provider, bonded) {
   this.address = userAddress;
   // Trucated afftess of the user. First and last 4 characters of the entire address
   this.shortAddress =
      this.address.substring(0, 6) +
      "..." +
      this.address.substring(this.address.length - 4);
   this.isProvider = provider;
   this.ethBalance = 0;
   this.zapBalance = 0;
   this.bondedOracles = [];
}
