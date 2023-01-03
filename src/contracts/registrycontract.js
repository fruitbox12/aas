/**
 * key: chain ID
 * value: string of the address of the contract on the key's respective chain
 * 1: Ethereum Mainnet
 * 42: Kovan Test Network
 * 31337: Zap Devnet
 */
export const registryAddress = {
   1: "0xC7Ab7FFc4FC2f3C75FfB621f574d4b9c861330f0",
   42: "0x26BC483E8f4E868B031b29973232c188B941a3D8",
   31337: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
};

export const registryAbi = [
   {
      "constant": true,
      "inputs": [
        {
          "name": "oracleAddress",
          "type": "address"
        }
      ],
      "name": "isProviderInitiated",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        },
        {
          "name": "endpoint",
          "type": "bytes32"
        }
      ],
      "name": "getProviderCurve",
      "outputs": [
        {
          "name": "",
          "type": "int256[]"
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
          "name": "endpoint",
          "type": "bytes32"
        },
        {
          "name": "curve",
          "type": "int256[]"
        },
        {
          "name": "broker",
          "type": "address"
        }
      ],
      "name": "initiateProviderCurve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getAllProviderParams",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "db",
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
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        },
        {
          "name": "key",
          "type": "bytes32"
        }
      ],
      "name": "getProviderParameter",
      "outputs": [
        {
          "name": "",
          "type": "bytes"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getProviderPublicKey",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getProviderTitle",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        },
        {
          "name": "endpoint",
          "type": "bytes32"
        }
      ],
      "name": "getCurveUnset",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "key",
          "type": "bytes32"
        },
        {
          "name": "value",
          "type": "bytes"
        }
      ],
      "name": "setProviderParameter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAllOracles",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "updateDependencies",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getPublicKey",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        },
        {
          "name": "endpoint",
          "type": "bytes32"
        }
      ],
      "name": "getProviderCurveLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
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
          "name": "endpoint",
          "type": "bytes32"
        }
      ],
      "name": "clearEndpoint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getOracleAddress",
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
      "constant": true,
      "inputs": [
        {
          "name": "oracleAddress",
          "type": "address"
        },
        {
          "name": "endpoint",
          "type": "bytes32"
        }
      ],
      "name": "getEndpointBroker",
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
      "inputs": [],
      "name": "selfDestruct",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getProviderEndpoints",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
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
          "name": "publicKey",
          "type": "uint256"
        },
        {
          "name": "title",
          "type": "bytes32"
        }
      ],
      "name": "initiateProvider",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "source",
          "type": "string"
        }
      ],
      "name": "stringToBytes32",
      "outputs": [
        {
          "name": "result",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        },
        {
          "name": "endpoint",
          "type": "bytes32"
        }
      ],
      "name": "getEndpointParams",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getTitle",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "title",
          "type": "bytes32"
        }
      ],
      "name": "setProviderTitle",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "endpoint",
          "type": "bytes32"
        },
        {
          "name": "endpointParams",
          "type": "bytes32[]"
        }
      ],
      "name": "setEndpointParams",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "c",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "title",
          "type": "bytes32"
        }
      ],
      "name": "NewProvider",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "endpoint",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "curve",
          "type": "int256[]"
        },
        {
          "indexed": true,
          "name": "broker",
          "type": "address"
        }
      ],
      "name": "NewCurve",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
];
