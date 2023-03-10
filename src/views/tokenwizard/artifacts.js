export const TOKEN_DOT_FACTORY = [
    {
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "symbol",
            "type": "bytes32"
          },
          {
            "name": "curve",
            "type": "int256[]"
          }
        ],
        "name": "initializeCurve",
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
        "inputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          }
        ],
        "name": "newToken",
        "outputs": [
          {
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "numDots",
            "type": "uint256"
          }
        ],
        "name": "unbond",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "numDots",
            "type": "uint256"
          }
        ],
        "name": "bond",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "x",
            "type": "address"
          }
        ],
        "name": "toBytes",
        "outputs": [
          {
            "name": "b",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getEndpoints",
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
        "inputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "curves",
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
        "constant": true,
        "inputs": [
          {
            "name": "x",
            "type": "bytes32"
          }
        ],
        "name": "bytes32ToString",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "coord",
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
            "name": "endpoint",
            "type": "bytes32"
          }
        ],
        "name": "getTokenAddress",
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
        "inputs": [],
        "name": "tokenFactory",
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
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "curves_list",
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
        "inputs": [],
        "name": "reserveToken",
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
        "inputs": [
          {
            "name": "coordinator",
            "type": "address"
          },
          {
            "name": "factory",
            "type": "address"
          },
          {
            "name": "providerPubKey",
            "type": "uint256"
          },
          {
            "name": "providerTitle",
            "type": "bytes32"
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
            "indexed": false,
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "DotTokenCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "name": "numDots",
            "type": "uint256"
          },
          {
            "indexed": true,
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "Bonded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "name": "numDots",
            "type": "uint256"
          },
          {
            "indexed": true,
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "Unbonded",
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
      }
    ],
    "networks": {
      "1": {
        "events": {},
        "links": {},
        "address": "0x2416002d127175bc2d627faefdaa4186c7c49833",
        "transactionHash": "0x51b6453a7bb6b8b1284063efe839a3ec2ae8cf5e52efa24ae8fd88b7ca6a7fee"
      },
      "42": {
        "events": {},
        "links": {},
        "address": "0xf108237201E6EE3906f19390C699dA4d1495040F",
        "transactionHash": "0x52a4cdc19fdb99c432317d14b4b27254c430998fc8baa4c9a56bcc6e9915f1eb"
      }
    }, 
  }
]

export const SAMPLE_CONTEST = [
    {
      "abi": [
        {
          "constant": false,
          "inputs": [
            {
              "name": "endpoint",
              "type": "bytes32"
            },
            {
              "name": "symbol",
              "type": "bytes32"
            },
            {
              "name": "curve",
              "type": "int256[]"
            }
          ],
          "name": "initializeCurve",
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
          "name": "settle",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "status",
          "outputs": [
            {
              "name": "",
              "type": "uint8"
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
              "name": "numDots",
              "type": "uint256"
            }
          ],
          "name": "unbond",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getStatus",
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
          "name": "ttl",
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
          "constant": false,
          "inputs": [
            {
              "name": "endpoint",
              "type": "bytes32"
            },
            {
              "name": "numDots",
              "type": "uint256"
            }
          ],
          "name": "bond",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "x",
              "type": "address"
            }
          ],
          "name": "toBytes",
          "outputs": [
            {
              "name": "b",
              "type": "bytes"
            }
          ],
          "payable": false,
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getEndpoints",
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
          "inputs": [
            {
              "name": "b",
              "type": "bytes"
            }
          ],
          "name": "bytesToAddr",
          "outputs": [
            {
              "name": "",
              "type": "address"
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
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "curves",
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
          "inputs": [],
          "name": "oracle",
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
              "name": "_endpoint",
              "type": "bytes32"
            }
          ],
          "name": "isEndpointValid",
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
          "constant": true,
          "inputs": [
            {
              "name": "x",
              "type": "bytes32"
            }
          ],
          "name": "bytes32ToString",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "coord",
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
              "name": "",
              "type": "address"
            }
          ],
          "name": "redeemed",
          "outputs": [
            {
              "name": "",
              "type": "uint8"
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
              "name": "endpoint",
              "type": "bytes32"
            }
          ],
          "name": "getTokenAddress",
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
          "inputs": [],
          "name": "winValue",
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
          "constant": false,
          "inputs": [
            {
              "name": "oracleAddress",
              "type": "address"
            },
            {
              "name": "_ttl",
              "type": "uint256"
            }
          ],
          "name": "initializeContest",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "reset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "winner",
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
              "name": "endpoint",
              "type": "bytes32"
            }
          ],
          "name": "judge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "tokenFactory",
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
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "curves_list",
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
          "inputs": [],
          "name": "reserveToken",
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
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "redeemed_list",
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
          "inputs": [
            {
              "name": "coordinator",
              "type": "address"
            },
            {
              "name": "factory",
              "type": "address"
            },
            {
              "name": "providerPubKey",
              "type": "uint256"
            },
            {
              "name": "providerTitle",
              "type": "bytes32"
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
              "indexed": false,
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "name": "DotTokenCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "endpoint",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "numDots",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Bonded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "endpoint",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Unbonded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "oracle",
              "type": "address"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "Closed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "winner",
              "type": "bytes32"
            }
          ],
          "name": "Judged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "winValue",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "winTokens",
              "type": "uint256"
            }
          ],
          "name": "Settled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "Reset",
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
        }
      ],

      "networks": {
          "1": {},
          "42": {}
      },
    }
]

export const TOKENFACT_BYTES= "0x60806040523480156200001157600080fd5b5060405160808062003105833981018060405260808110156200003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260098152602001807f5a41505f544f4b454e000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015620001a457600080fd5b505afa158015620001b9573d6000803e3d6000fd5b505050506040513d6020811015620001d057600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b1580156200032057600080fd5b505afa15801562000335573d6000803e3d6000fd5b505050506040513d60208110156200034c57600080fd5b81019080805190602001909291905050506000196040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015620003e657600080fd5b505af1158015620003fb573d6000803e3d6000fd5b505050506040513d60208110156200041257600080fd5b81019080805190602001909291905050505082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f524547495354525900000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b1580156200052857600080fd5b505afa1580156200053d573d6000803e3d6000fd5b505050506040513d60208110156200055457600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663af87c83384846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182815260200192505050602060405180830381600087803b158015620005df57600080fd5b505af1158015620005f4573d6000803e3d6000fd5b505050506040513d60208110156200060b57600080fd5b8101908080519060200190929190505050505050505050612ad380620006326000396000f3fe6080604052600436106100d5576000357c01000000000000000000000000000000000000000000000000000000009004806306af0650146100da5780634629ffea146101f35780634d8de4fc1461039257806351f93215146103d7578063593b79fe1461041c5780635d7c83f1146104e657806366903e80146105525780638da5cb5b146105cd5780639201de55146106245780639495c25a146106d8578063b12e44101461072f578063e77772fe146107aa578063f2fde38b14610801578063f3457c0114610852578063f4325d67146108a1575b600080fd5b3480156100e657600080fd5b506101b1600480360360608110156100fd57600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561012e57600080fd5b82018360208201111561014057600080fd5b8035906020019184602083028401116401000000008311171561016257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506108f8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ff57600080fd5b506103506004803603604081101561021657600080fd5b810190808035906020019064010000000081111561023357600080fd5b82018360208201111561024557600080fd5b8035906020019184600183028401116401000000008311171561026757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156102ca57600080fd5b8201836020820111156102dc57600080fd5b803590602001918460018302840111640100000000831117156102fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610fd9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039e57600080fd5b506103d5600480360360408110156103b557600080fd5b810190808035906020019092919080359060200190929190505050611189565b005b3480156103e357600080fd5b5061041a600480360360408110156103fa57600080fd5b8101908080359060200190929190803590602001909291905050506119d7565b005b34801561042857600080fd5b5061046b6004803603602081101561043f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612361565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ab578082015181840152602081019050610490565b50505050905090810190601f1680156104d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104f257600080fd5b506104fb612447565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561053e578082015181840152602081019050610523565b505050509050019250505060405180910390f35b34801561055e57600080fd5b5061058b6004803603602081101561057557600080fd5b810190808035906020019092919050505061249f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105d957600080fd5b506105e26124d2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561063057600080fd5b5061065d6004803603602081101561064757600080fd5b81019080803590602001909291905050506124f7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561069d578082015181840152602081019050610682565b50505050905090810190601f1680156106ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156106e457600080fd5b506106ed61255c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561073b57600080fd5b506107686004803603602081101561075257600080fd5b8101908080359060200190929190505050612582565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156107b657600080fd5b506107bf6127c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561080d57600080fd5b506108506004803603602081101561082457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506127ec565b005b34801561085e57600080fd5b5061088b6004803603602081101561087557600080fd5b8101908080359060200190929190505050612941565b6040518082815260200191505060405180910390f35b3480156108ad57600080fd5b506108b6612964565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff166006600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156109d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f43757276652073706563696669657220616c726561647920657869737473000081525060200191505060405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f524547495354525900000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015610a9257600080fd5b505afa158015610aa6573d6000803e3d6000fd5b505050506040513d6020811015610abc57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663186b79c9306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b6857600080fd5b505afa158015610b7c573d6000803e3d6000fd5b505050506040513d6020811015610b9257600080fd5b81019080805190602001909291905050501515610c17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f50726f7669646572206e6f7420696e746969616c697a6564000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663238b3aed8685306040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848152602001806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b83811015610cdc578082015181840152602081019050610cc1565b50505050905001945050505050602060405180830381600087803b158015610d0357600080fd5b505af1158015610d17573d6000803e3d6000fd5b505050506040513d6020811015610d2d57600080fd5b810190808051906020019092919050505050610d59610d4b866124f7565b610d54866124f7565b610fd9565b6006600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060078590806001815401808255809150509060018203906000526020600020016000909192909190915055508073ffffffffffffffffffffffffffffffffffffffff16635750644a86610e2f600660008a815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16612361565b6040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ea0578082015181840152602081019050610e85565b50505050905090810190601f168015610ecd5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610eed57600080fd5b505af1158015610f01573d6000803e3d6000fd5b505050507f6c98c7e1fb155d4c2c1f008682fd94fb74d1c9667207aaaa9ab65cee2b38ea7a6006600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16006600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150509392505050565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663198e2b8a85856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561108b578082015181840152602081019050611070565b50505050905090810190601f1680156110b85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156110f15780820151818401526020810190506110d6565b50505050905090810190601f16801561111e5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561113f57600080fd5b505af1158015611153573d6000803e3d6000fd5b505050506040513d602081101561116957600080fd5b810190808051906020019092919050505090508091508191505092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b15801561124957600080fd5b505afa15801561125d573d6000803e3d6000fd5b505050506040513d602081101561127357600080fd5b8101908080519060200190929190505050600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d7b5e2230856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b15801561138957600080fd5b505afa15801561139d573d6000803e3d6000fd5b505050506040513d60208110156113b357600080fd5b81019080805190602001909291905050509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600c8152602001807f43555252454e545f434f5354000000000000000000000000000000000000000081525060200191505060206040518083038186803b15801561148657600080fd5b505afa15801561149a573d6000803e3d6000fd5b505050506040513d60208110156114b057600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663197d66d53086866001870103600188036040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060206040518083038186803b1580156115de57600080fd5b505afa1580156115f2573d6000803e3d6000fd5b505050506040513d602081101561160857600080fd5b81019080805190602001909291905050509050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a06fe7753086866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050602060405180830381600087803b1580156116e857600080fd5b505af11580156116fc573d6000803e3d6000fd5b505050506040513d602081101561171257600080fd5b81019080805190602001909291905050505060006006600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166379cc679033866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156117ff57600080fd5b505af1158015611813573d6000803e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156118dc57600080fd5b505af11580156118f0573d6000803e3d6000fd5b505050506040513d602081101561190657600080fd5b8101908080519060200190929190505050151561198b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f4572726f723a205472616e73666572206661696c65640000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1684867f11a44cb23d594705c95aa35553bec5a6572ef7d08fbd468f29c5392ee1d214e360405160405180910390a45050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015611a9757600080fd5b505afa158015611aab573d6000803e3d6000fd5b505050506040513d6020811015611ac157600080fd5b8101908080519060200190929190505050600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d7b5e2230856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611bd757600080fd5b505afa158015611beb573d6000803e3d6000fd5b505050506040513d6020811015611c0157600080fd5b810190808051906020019092919050505090506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600c8152602001807f43555252454e545f434f5354000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015611cd657600080fd5b505afa158015611cea573d6000803e3d6000fd5b505050506040513d6020811015611d0057600080fd5b8101908080519060200190929190505050905060008173ffffffffffffffffffffffffffffffffffffffff1663197d66d5308760018701600189036040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060206040518083038186803b158015611dcc57600080fd5b505afa158015611de0573d6000803e3d6000fd5b505050506040513d6020811015611df657600080fd5b81019080805190602001909291905050509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611f0257600080fd5b505af1158015611f16573d6000803e3d6000fd5b505050506040513d6020811015611f2c57600080fd5b81019080805190602001909291905050501515611fd7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001807f696e73756666696369656e7420616363657074656420746f6b656e206e756d4481526020017f6f747320617070726f76656420666f72207472616e736665720000000000000081525060400191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156120be57600080fd5b505af11580156120d2573d6000803e3d6000fd5b505050506040513d60208110156120e857600080fd5b810190808051906020019092919050505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399275cc73087876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050602060405180830381600087803b1580156121c757600080fd5b505af11580156121db573d6000803e3d6000fd5b505050506040513d60208110156121f157600080fd5b8101908080519060200190929190505050506006600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156122d957600080fd5b505af11580156122ed573d6000803e3d6000fd5b505050506040513d602081101561230357600080fd5b8101908080519060200190929190505050503373ffffffffffffffffffffffffffffffffffffffff1684867f9738427d867a8b08540015120042d5a5ab1244297c70f40cb29fa7ba3458715360405160405180910390a45050505050565b606060146040519080825280601f01601f1916602001820160405280156123975781602001600182028038833980820191505090505b50905060008090505b6014811015612441578060130360080260020a8373ffffffffffffffffffffffffffffffffffffffff168115156123d357fe5b047f010000000000000000000000000000000000000000000000000000000000000002828281518110151561240457fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506123a0565b50919050565b6060600780548060200260200160405190810160405280929190818152602001828054801561249557602002820191906000526020600020905b815481526020019060010190808311612481575b5050505050905090565b60066020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60608060206040519080825280601f01601f19166020018201604052801561252e5781602001600182028038833980820191505090505b5090508260405160200180828152602001915050604051602081830303815290604052905080915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f524547495354525900000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b15801561264557600080fd5b505afa158015612659573d6000803e3d6000fd5b505050506040513d602081101561266f57600080fd5b810190808051906020019092919050505090506127be8173ffffffffffffffffffffffffffffffffffffffff16634d9bcac430866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060006040518083038186803b15801561272657600080fd5b505afa15801561273a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561276457600080fd5b81019080805164010000000081111561277c57600080fd5b8281019050602081018481111561279257600080fd5b81518560018202830111640100000000821117156127af57600080fd5b5050929190505050600061298a565b915050919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561284757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561288357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60078181548110151561295057fe5b906000526020600020016000915090505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000816014830110151515612a07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f416464726573735f6f766572666c6f77000000000000000000000000000081525060200191505060405180910390fd5b60148201835110151515612a83576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f746f416464726573735f6f75744f66426f756e6473000000000000000000000081525060200191505060405180910390fd5b60006c0100000000000000000000000083602086010151049050809150509291505056fea165627a7a7230582026c099b03418f50d2b2c60c9cda21c34a05b75311372ca4865626739a64e531b0029"

export const SAMPLE_BYTES = "0x60806040523480156200001157600080fd5b50604051608080620049c3833981018060405260808110156200003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260098152602001807f5a41505f544f4b454e000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015620001a457600080fd5b505afa158015620001b9573d6000803e3d6000fd5b505050506040513d6020811015620001d057600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b1580156200032057600080fd5b505afa15801562000335573d6000803e3d6000fd5b505050506040513d60208110156200034c57600080fd5b81019080805190602001909291905050506000196040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015620003e657600080fd5b505af1158015620003fb573d6000803e3d6000fd5b505050506040513d60208110156200041257600080fd5b81019080805190602001909291905050505082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f524547495354525900000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b1580156200052857600080fd5b505afa1580156200053d573d6000803e3d6000fd5b505050506040513d60208110156200055457600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663af87c83384846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182815260200192505050602060405180830381600087803b158015620005df57600080fd5b505af1158015620005f4573d6000803e3d6000fd5b505050506040513d60208110156200060b57600080fd5b8101908080519060200190929190505050506000600a60006101000a81548160ff021916908360048111156200063d57fe5b0217905550505050505061436c80620006576000396000f3fe608060405260043610610164576000357c01000000000000000000000000000000000000000000000000000000009004806306af06501461016957806311da60b414610282578063200d2ed2146102995780634d8de4fc146102d25780634e69d5601461032b5780634e8b1dd51461035657806351f9321514610381578063593b79fe146103c65780635d7c83f1146104905780635ef6228c146104fc57806366903e80146106045780637dc0d1d01461067f5780638ba3dbee146106d65780638da5cb5b146107295780639201de55146107805780639495c25a146108345780639f4568ef1461088b578063b12e4410146108f6578063b632313814610971578063bdb60f451461099c578063d826f88f146109f7578063dfbf53ae14610a0e578063e410314314610a39578063e77772fe14610a74578063f2fde38b14610acb578063f3457c0114610b1c578063f4325d6714610b6b578063fe97d6b314610bc2575b600080fd5b34801561017557600080fd5b506102406004803603606081101561018c57600080fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156101bd57600080fd5b8201836020820111156101cf57600080fd5b803590602001918460208302840111640100000000831117156101f157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610c3d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b50610297611222565b005b3480156102a557600080fd5b506102ae6118fb565b604051808260048111156102be57fe5b60ff16815260200191505060405180910390f35b3480156102de57600080fd5b50610315600480360360408110156102f557600080fd5b81019080803590602001909291908035906020019092919050505061190e565b6040518082815260200191505060405180910390f35b34801561033757600080fd5b5061034061276c565b6040518082815260200191505060405180910390f35b34801561036257600080fd5b5061036b61278e565b6040518082815260200191505060405180910390f35b34801561038d57600080fd5b506103c4600480360360408110156103a457600080fd5b810190808035906020019092919080359060200190929190505050612794565b005b3480156103d257600080fd5b50610415600480360360208110156103e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506131bb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045557808201518184015260208101905061043a565b50505050905090810190601f1680156104825780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049c57600080fd5b506104a56132a1565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104e85780820151818401526020810190506104cd565b505050509050019250505060405180910390f35b34801561050857600080fd5b506105c26004803603602081101561051f57600080fd5b810190808035906020019064010000000081111561053c57600080fd5b82018360208201111561054e57600080fd5b8035906020019184600183028401116401000000008311171561057057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506132f9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561061057600080fd5b5061063d6004803603602081101561062757600080fd5b81019080803590602001909291905050506133cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561068b57600080fd5b506106946133fe565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106e257600080fd5b5061070f600480360360208110156106f957600080fd5b8101908080359060200190929190505050613424565b604051808215151515815260200191505060405180910390f35b34801561073557600080fd5b5061073e61347c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561078c57600080fd5b506107b9600480360360208110156107a357600080fd5b81019080803590602001909291905050506134a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f95780820151818401526020810190506107de565b50505050905090810190601f1680156108265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561084057600080fd5b50610849613506565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561089757600080fd5b506108da600480360360208110156108ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061352c565b604051808260ff1660ff16815260200191505060405180910390f35b34801561090257600080fd5b5061092f6004803603602081101561091957600080fd5b810190808035906020019092919050505061354c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561097d57600080fd5b5061098661378e565b6040518082815260200191505060405180910390f35b3480156109a857600080fd5b506109f5600480360360408110156109bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613794565b005b348015610a0357600080fd5b50610a0c613963565b005b348015610a1a57600080fd5b50610a23613c94565b6040518082815260200191505060405180910390f35b348015610a4557600080fd5b50610a7260048036036020811015610a5c57600080fd5b8101908080359060200190929190505050613c9a565b005b348015610a8057600080fd5b50610a89613f02565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610ad757600080fd5b50610b1a60048036036020811015610aee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613f28565b005b348015610b2857600080fd5b50610b5560048036036020811015610b3f57600080fd5b810190808035906020019092919050505061407d565b6040518082815260200191505060405180910390f35b348015610b7757600080fd5b50610b806140a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610bce57600080fd5b50610bfb60048036036020811015610be557600080fd5b81019080803590602001909291905050506140c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff16600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604f8152602001807f437572766520656e64706f696e7420616c726561647920657869737473206f7281526020017f207573656420696e2074686520706173742e20506c656173652063686f6f736581526020017f2061206e657720656e64706f696e74000000000000000000000000000000000081525060600191505060405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f524547495354525900000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015610e2357600080fd5b505afa158015610e37573d6000803e3d6000fd5b505050506040513d6020811015610e4d57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663238b3aed8685306040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180848152602001806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b83811015610f25578082015181840152602081019050610f0a565b50505050905001945050505050602060405180830381600087803b158015610f4c57600080fd5b505af1158015610f60573d6000803e3d6000fd5b505050506040513d6020811015610f7657600080fd5b810190808051906020019092919050505050610fa2610f94866134a1565b610f9d866134a1565b614104565b600b600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600c8590806001815401808255809150509060018203906000526020600020016000909192909190915055508073ffffffffffffffffffffffffffffffffffffffff16635750644a86611078600b60008a815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166131bb565b6040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110e95780820151818401526020810190506110ce565b50505050905090810190601f1680156111165780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561113657600080fd5b505af115801561114a573d6000803e3d6000fd5b505050507f6c98c7e1fb155d4c2c1f008682fd94fb74d1c9667207aaaa9ab65cee2b38ea7a600b600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150509392505050565b6002600481111561122f57fe5b600a60009054906101000a900460ff16600481111561124a57fe5b1415156112bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f77696e6e6572206e6f742064657465726d696e6564000000000000000000000081525060200191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b15801561137f57600080fd5b505afa158015611393573d6000803e3d6000fd5b505050506040513d60208110156113a957600080fd5b8101908080519060200190929190505050600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d7b5e22306008546040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156114c157600080fd5b505afa1580156114d5573d6000803e3d6000fd5b505050506040513d60208110156114eb57600080fd5b81019080805190602001909291905050509050600080600090505b600c8054905081101561178a57600854600c8281548110151561152557fe5b906000526020600020015414151561177d57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d7b5e2230600c8481548110151561158557fe5b90600052602060002001546040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b15801561161357600080fd5b505afa158015611627573d6000803e3d6000fd5b505050506040513d602081101561163d57600080fd5b81019080805190602001909291905050509150600082111561177c57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a06fe77530600c848154811015156116a757fe5b9060005260206000200154856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050602060405180830381600087803b15801561173f57600080fd5b505af1158015611753573d6000803e3d6000fd5b505050506040513d602081101561176957600080fd5b8101908080519060200190929190505050505b5b8080600101915050611506565b5081600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561184757600080fd5b505afa15801561185b573d6000803e3d6000fd5b505050506040513d602081101561187157600080fd5b810190808051906020019092919050505081151561188b57fe5b046009819055506003600a60006101000a81548160ff021916908360048111156118b157fe5b02179055507ff5b268a3ff315cc44ccceeef86259c9e8eef81ceecb14001543809115380dd6260095483604051808381526020018281526020019250505060405180910390a15050565b600a60009054906101000a900460ff1681565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b1580156119d057600080fd5b505afa1580156119e4573d6000803e3d6000fd5b505050506040513d60208110156119fa57600080fd5b8101908080519060200190929190505050600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d7b5e2230866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611b1057600080fd5b505afa158015611b24573d6000803e3d6000fd5b505050506040513d6020811015611b3a57600080fd5b81019080805190602001909291905050509050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a06fe77530600854866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050602060405180830381600087803b158015611c1c57600080fd5b505af1158015611c30573d6000803e3d6000fd5b505050506040513d6020811015611c4657600080fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600c8152602001807f43555252454e545f434f5354000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015611d1857600080fd5b505afa158015611d2c573d6000803e3d6000fd5b505050506040513d6020811015611d4257600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663197d66d53087876001870103600189036040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060206040518083038186803b158015611e7057600080fd5b505afa158015611e84573d6000803e3d6000fd5b505050506040513d6020811015611e9a57600080fd5b810190808051906020019092919050505090506000600b600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060016004811115611ef257fe5b600a60009054906101000a900460ff166004811115611f0d57fe5b1480611f3d5750600480811115611f2057fe5b600a60009054906101000a900460ff166004811115611f3b57fe5b145b1561225e5760075443111515611fbb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f6f7261636c65207175657279206e6f7420657870697265642e0000000000000081525060200191505060405180910390fd5b6004600a60006101000a81548160ff02191690836004811115611fda57fe5b02179055508073ffffffffffffffffffffffffffffffffffffffff166379cc679033876040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561208257600080fd5b505af1158015612096573d6000803e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561215f57600080fd5b505af1158015612173573d6000803e3d6000fd5b505050506040513d602081101561218957600080fd5b8101908080519060200190929190505050151561220e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f7472616e73666572206661696c6564000000000000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1682877f11a44cb23d594705c95aa35553bec5a6572ef7d08fbd468f29c5392ee1d214e360405160405180910390a4819350505050612766565b6003600481111561226b57fe5b600a60009054906101000a900460ff16600481111561228657fe5b1415156122fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f20636f6e74657374206e6f7420736574746c656400000000000000000000000081525060200191505060405180910390fd5b6000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660ff161415156123c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f616c7265616479207265646565656d656400000000000000000000000000000081525060200191505060405180910390fd5b85600854141515612461576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f6f6e6c792077696e6e6572732063616e20756e626f6e6420666f72207265776181526020017f726473000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60008261246f60085461354c565b73ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561250757600080fd5b505afa15801561251b573d6000803e3d6000fd5b505050506040513d602081101561253157600080fd5b8101908080519060200190929190505050600954020190508173ffffffffffffffffffffffffffffffffffffffff166379cc679033886040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156125ec57600080fd5b505af1158015612600573d6000803e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156126c957600080fd5b505af11580156126dd573d6000803e3d6000fd5b505050506040513d60208110156126f357600080fd5b8101908080519060200190929190505050506001600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff160217905550809450505050505b92915050565b6000600a60009054906101000a900460ff16600481111561278957fe5b905090565b60075481565b600160048111156127a157fe5b600a60009054906101000a900460ff1660048111156127bc57fe5b141515612831576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f20636f6e74657374206973206e6f7420696e697469617465640000000000000081525060200191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260078152602001807f424f4e444147450000000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b1580156128f157600080fd5b505afa158015612905573d6000803e3d6000fd5b505050506040513d602081101561291b57600080fd5b8101908080519060200190929190505050600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d7b5e2230856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015612a3157600080fd5b505afa158015612a45573d6000803e3d6000fd5b505050506040513d6020811015612a5b57600080fd5b810190808051906020019092919050505090506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180806020018281038252600c8152602001807f43555252454e545f434f5354000000000000000000000000000000000000000081525060200191505060206040518083038186803b158015612b3057600080fd5b505afa158015612b44573d6000803e3d6000fd5b505050506040513d6020811015612b5a57600080fd5b8101908080519060200190929190505050905060008173ffffffffffffffffffffffffffffffffffffffff1663197d66d5308760018701600189036040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060206040518083038186803b158015612c2657600080fd5b505afa158015612c3a573d6000803e3d6000fd5b505050506040513d6020811015612c5057600080fd5b81019080805190602001909291905050509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015612d5c57600080fd5b505af1158015612d70573d6000803e3d6000fd5b505050506040513d6020811015612d8657600080fd5b81019080805190602001909291905050501515612e31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001807f696e73756666696369656e7420616363657074656420746f6b656e206e756d4481526020017f6f747320617070726f76656420666f72207472616e736665720000000000000081525060400191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612f1857600080fd5b505af1158015612f2c573d6000803e3d6000fd5b505050506040513d6020811015612f4257600080fd5b810190808051906020019092919050505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399275cc73087876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050602060405180830381600087803b15801561302157600080fd5b505af1158015613035573d6000803e3d6000fd5b505050506040513d602081101561304b57600080fd5b810190808051906020019092919050505050600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561313357600080fd5b505af1158015613147573d6000803e3d6000fd5b505050506040513d602081101561315d57600080fd5b8101908080519060200190929190505050503373ffffffffffffffffffffffffffffffffffffffff1684867f9738427d867a8b08540015120042d5a5ab1244297c70f40cb29fa7ba3458715360405160405180910390a45050505050565b606060146040519080825280601f01601f1916602001820160405280156131f15781602001600182028038833980820191505090505b50905060008090505b601481101561329b578060130360080260020a8373ffffffffffffffffffffffffffffffffffffffff1681151561322d57fe5b047f010000000000000000000000000000000000000000000000000000000000000002828281518110151561325e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506131fa565b50919050565b6060600c8054806020026020016040519081016040528092919081815260200182805480156132ef57602002820191906000526020600020905b8154815260200190600101908083116132db575b5050505050905090565b600080600090506000600184510390505b60006001820111156133c1576000848281518110151561332657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027f0100000000000000000000000000000000000000000000000000000000000000900460ff16905060006002600184885103030260100a820290508084019350505080806001900391505061330a565b5080915050919050565b600b6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600090505b600c8054905081101561347157600c8181548110151561344857fe5b9060005260206000200154831415613464576001915050613477565b808060010191505061342c565b50600090505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60608060206040519080825280601f01601f1916602001820160405280156134d85781602001600182028038833980820191505090505b5090508260405160200180828152602001915050604051602081830303815290604052905080915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d6020528060005260406000206000915054906101000a900460ff1681565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f524547495354525900000000000000000000000000000000000000000000000081525060200191505060206040518083038186803b15801561360f57600080fd5b505afa158015613623573d6000803e3d6000fd5b505050506040513d602081101561363957600080fd5b810190808051906020019092919050505090506137868173ffffffffffffffffffffffffffffffffffffffff16634d9bcac430866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060006040518083038186803b1580156136f057600080fd5b505afa158015613704573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561372e57600080fd5b81019080805164010000000081111561374657600080fd5b8281019050602081018481111561375c57600080fd5b815185600182028301116401000000008211171561377957600080fd5b50509291905050506132f9565b915050919050565b60095481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156137ef57600080fd5b600060048111156137fc57fe5b600a60009054906101000a900460ff16600481111561381757fe5b14151561388c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f436f6e7465737420616c726561647920696e697469616c697a6564000000000081525060200191505060405180910390fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504381016007819055506001600a60006101000a81548160ff021916908360048111156138f557fe5b0217905550600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e660405160405180910390a25050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156139bf57600080fd5b600360048111156139cc57fe5b600a60009054906101000a900460ff1660048111156139e757fe5b1480613a1757506004808111156139fa57fe5b600a60009054906101000a900460ff166004811115613a1557fe5b145b1515613a8b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f636f6e74657374206e6f7420736574746c65640000000000000000000000000081525060200191505060405180910390fd5b600480811115613a9757fe5b600a60009054906101000a900460ff166004811115613ab257fe5b1415613c26576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015613b7557600080fd5b505afa158015613b89573d6000803e3d6000fd5b505050506040513d6020811015613b9f57600080fd5b8101908080519060200190929190505050141515613c25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f66756e64732072656d61696e000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b600e6000613c3491906142b4565b600c6000613c4291906142d5565b6001600a60006101000a81548160ff02191690836004811115613c6157fe5b02179055507f6423db340205c829eeb91151b1c5d1dc6d7a2b8708b1621494e89ba90c87081e60405160405180910390a1565b60085481565b60016004811115613ca757fe5b600a60009054906101000a900460ff166004811115613cc257fe5b141515613d37576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f436f6e74657374206e6f7420696e697469616c697a656400000000000000000081525060200191505060405180910390fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613dfc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f6e6c792064657369676e61746564204f7261636c652063616e206a7564676581525060200191505060405180910390fd5b60075443101515613e9b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f436f6e7465737420657870697265642c20726566756e6420696e2070726f636581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b806008819055506002600a60006101000a81548160ff02191690836004811115613ec157fe5b02179055507f1dc269042eebc624dd61bda8673af110f6d520b8e508c5a05aff5b324ff80bc06008546040518082815260200191505060405180910390a150565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613f8357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515613fbf57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600c8181548110151561408c57fe5b906000526020600020016000915090505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600e818154811015156140d557fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663198e2b8a85856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200180602001838103835285818151815260200191508051906020019080838360005b838110156141b657808201518184015260208101905061419b565b50505050905090810190601f1680156141e35780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561421c578082015181840152602081019050614201565b50505050905090810190601f1680156142495780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561426a57600080fd5b505af115801561427e573d6000803e3d6000fd5b505050506040513d602081101561429457600080fd5b810190808051906020019092919050505090508091508191505092915050565b50805460008255906000526020600020908101906142d291906142f6565b50565b50805460008255906000526020600020908101906142f3919061431b565b50565b61431891905b808211156143145760008160009055506001016142fc565b5090565b90565b61433d91905b80821115614339576000816000905550600101614321565b5090565b9056fea165627a7a72305820abf370e8ea6c6141aeb328efc31899cd44039ee04dcba43eec8599ed6d1b7c320029"
