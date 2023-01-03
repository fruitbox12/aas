/**
 * key: chain ID
 * value: string of the address of the contract on the key's respective chain
 * 1: Ethereum Mainnet
 * 42: Kovan Test Network
 * 31337: Zap Devnet
 */
export const tokenDotFactoryAddress = {
   // 1:
   42: "0xb0Bc8151Bcd5824359298587395655923F4c6AcB",
   //  31337
};

export const tokenDotFactoryAbi = [
   {
      constant: false,
      inputs: [
         { name: "specifier", type: "bytes32" },
         { name: "symbol", type: "bytes32" },
         { name: "curve", type: "int256[]" },
      ],
      name: "initializeCurve",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "name", type: "string" },
         { name: "symbol", type: "string" },
      ],
      name: "newToken",
      outputs: [{ name: "tokenAddress", type: "address" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "specifier", type: "bytes32" },
         { name: "numDots", type: "uint256" },
      ],
      name: "unbond",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "specifier", type: "bytes32" },
         { name: "numDots", type: "uint256" },
      ],
      name: "bond",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      constant: true,
      inputs: [{ name: "x", type: "address" }],
      name: "toBytes",
      outputs: [{ name: "b", type: "bytes" }],
      payable: false,
      stateMutability: "pure",
      type: "function",
   },
   {
      constant: true,
      inputs: [{ name: "b", type: "bytes" }],
      name: "bytesToAddr",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "pure",
      type: "function",
   },
   {
      constant: true,
      inputs: [{ name: "", type: "bytes32" }],
      name: "curves",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: true,
      inputs: [{ name: "x", type: "bytes32" }],
      name: "bytes32ToString",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "pure",
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "coord",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: true,
      inputs: [{ name: "specifier", type: "bytes32" }],
      name: "getTokenAddress",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "tokenFactory",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: false,
      inputs: [{ name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "reserveToken",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [
         { name: "coordinator", type: "address" },
         { name: "factory", type: "address" },
         { name: "providerPubKey", type: "uint256" },
         { name: "providerTitle", type: "bytes32" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
   },
   {
      anonymous: false,
      inputs: [{ indexed: false, name: "tokenAddress", type: "address" }],
      name: "DotTokenCreated",
      type: "event",
   },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "specifier", type: "bytes32" },
         { indexed: true, name: "numDots", type: "uint256" },
         { indexed: true, name: "sender", type: "address" },
      ],
      name: "Bonded",
      type: "event",
   },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "specifier", type: "bytes32" },
         { indexed: true, name: "numDots", type: "uint256" },
         { indexed: true, name: "sender", type: "address" },
      ],
      name: "Unbonded",
      type: "event",
   },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "previousOwner", type: "address" },
         { indexed: true, name: "newOwner", type: "address" },
      ],
      name: "OwnershipTransferred",
      type: "event",
   },
];
