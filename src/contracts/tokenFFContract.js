export const tokenDFFAddress = {
    31337: "0x6cD7771F56F7C70a1A61db5E1280F96500640b5C"
}

export const tokenDFFAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "coordinator",
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
      "name": "deployedFactories",
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
      "name": "pubkeys",
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
      "name": "getFactories",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        },
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
          "type": "uint256"
        }
      ],
      "name": "providerTitles",
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
          "name": "providerPubKey",
          "type": "uint256"
        },
        {
          "name": "providerTitle",
          "type": "bytes32"
        }
      ],
      "name": "deployFactory",
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
      "constant": true,
      "inputs": [],
      "name": "factory",
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
          "name": "_coordinator",
          "type": "address"
        },
        {
          "name": "_factory",
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
          "indexed": false,
          "name": "dotfactory",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "PubKey",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "Title",
          "type": "bytes32"
        }
      ],
      "name": "newDotFactory",
      "type": "event"
    }
  ]