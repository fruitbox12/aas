/**
 * key: chain ID
 * value: string of the address of the contract on the key's respective chain
 * 1: Ethereum Mainnet
 * 42: Kovan Test Network
 * 31337: Zap Devnet
 */
export const zapTokenAddress = {
   1: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
   42: "0x0331048143015c0784D0F9c723E709314aB87460",
   31337: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
};

export const zapTokenAbi = [
   {
      constant: true,
      inputs: [],
      name: "mintingFinished",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "_spender", type: "address" },
         { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "_from", type: "address" },
         { name: "_to", type: "address" },
         { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "_to", type: "address" },
         { name: "_amount", type: "uint256" },
      ],
      name: "mint",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "_spender", type: "address" },
         { name: "_subtractedValue", type: "uint256" },
      ],
      name: "decreaseApproval",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [],
      name: "finishMinting",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "_to", type: "address" },
         { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [
         { name: "_spender", type: "address" },
         { name: "_addedValue", type: "uint256" },
      ],
      name: "increaseApproval",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      type: "function",
   },
   {
      constant: true,
      inputs: [
         { name: "_owner", type: "address" },
         { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      type: "function",
   },
   {
      constant: false,
      inputs: [{ name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      type: "function",
   },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "to", type: "address" },
         { indexed: false, name: "amount", type: "uint256" },
      ],
      name: "Mint",
      type: "event",
   },
   { anonymous: false, inputs: [], name: "MintFinished", type: "event" },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "previousOwner", type: "address" },
         { indexed: true, name: "newOwner", type: "address" },
      ],
      name: "OwnershipTransferred",
      type: "event",
   },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "owner", type: "address" },
         { indexed: true, name: "spender", type: "address" },
         { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
   },
   {
      anonymous: false,
      inputs: [
         { indexed: true, name: "from", type: "address" },
         { indexed: true, name: "to", type: "address" },
         { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
   },
];
