export const abi = [
  {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fileIdex",
          "type": "uint256"
        }
      ],
      "name": "getAccessUser",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fileIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "setAccessUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_types",
          "type": "string"
        }
      ],
      "name": "setFileData",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fileIndex",
          "type": "uint256"
        }
      ],
      "name": "toggleFilePrivacy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalFiles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fileIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "whoCanView",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "types",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isPrivate",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "internalType": "struct UploadFile.DataFormat",
          "name": "",
          "type": "tuple"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
export const UPLOAD_CONTRACT_ADDRESS = "0xE5f62c11f8B9f0668EE39CE4FCbC74Bd39C2CC6A";