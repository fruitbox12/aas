/**
 * key: chain ID
 * value: string of the address of the contract on the key's respective chain
 * 1: Ethereum Mainnet
 * 42: Kovan Test Network
 * 31337: Zap Devnet
 */
export const currentCostAddress = {
   1: "0xdE775430f4e9F0DF7887d6c7C3ce63b257300fCA",
   42: "0x80d8e38D1b496EcB9c7afCBd194d34275736eC72",
   31337: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9"
};

export const currentCostAbi = [
   {
      constant: true,
      inputs: [
         { name: "oracleAddress", type: "address" },
         { name: "endpoint", type: "bytes32" },
         { name: "start", type: "uint256" },
         { name: "nDots", type: "uint256" },
      ],
      name: "_costOfNDots",
      outputs: [{ name: "cost", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: false,
      inputs: [],
      name: "updateDependencies",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
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
      constant: false,
      inputs: [],
      name: "selfDestruct",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      constant: true,
      inputs: [
         { name: "oracleAddress", type: "address" },
         { name: "endpoint", type: "bytes32" },
      ],
      name: "_dotLimit",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
   },
   {
      constant: true,
      inputs: [
         { name: "oracleAddress", type: "address" },
         { name: "endpoint", type: "bytes32" },
         { name: "start", type: "uint256" },
      ],
      name: "_currentCostOfDot",
      outputs: [{ name: "cost", type: "uint256" }],
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
      inputs: [{ name: "c", type: "address" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
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
