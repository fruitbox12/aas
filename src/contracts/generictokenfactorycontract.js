/**
 * key: chain ID
 * value: string of the address of the contract on the key's respective chain
 * 1: Ethereum Mainnet
 * 42: Kovan Test Network
 * 31337: Zap Devnet
 */
export const tokenDotFactoryAddress = {
   1: "0xe13fef4c8e75c12f9706e8bdf28fe847ce99cb42",
   42: "0xeC97E4896cF9f067a9dD428760316024EA0cfc12",
   31337: "0x36c02da8a0983159322a80ffe9f24b1acff8b570"
};

export const tokenDotFactoryAbi = [
   {
     "constant": true,
     "inputs": [
       {
         "name": "",
         "type": "uint256"
       }
     ],
     "name": "generatedTokens",
     "outputs": [
       {
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "_name",
         "type": "string"
       },
       {
         "name": "_symbol",
         "type": "string"
       }
     ],
     "name": "create",
     "outputs": [
       {
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [],
     "name": "getAllTokens",
     "outputs": [
       {
         "name": "",
         "type": "address[]"
       }
     ],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "constructor"
   }
 ];
