// const { ethers } = require("hardhat");
// require("dotenv").config({ path: ".env" });
// const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

// async function main() {
//   // Address of the Crypto Devs NFT contract that you deployed in the previous module
//   const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

//   /*
//     A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//     so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
//     */
//   const cryptoDevsTokenContract = await ethers.getContractFactory(
//     "CryptoDevToken"
//   );

//   // deploy the contract
//   const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
//     cryptoDevsNFTContract
//   );

//   // print the address of the deployed contract
//   console.log(
//     "Crypto Devs Token Contract Address:",
//     deployedCryptoDevsTokenContract.address
//   );
// }

// // Call the main function and catch if there is any error
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

// const { ethers } = require("hardhat");
// const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

// async function main() {
//   // Deploy the FakeNFTMarketplace contract first
//   const FakeNFTMarketplace = await ethers.getContractFactory(
//     "FakeNFTMarketplace"
//   );
//   const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
//   await fakeNftMarketplace.deployed();

//   console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

//   // Now deploy the CryptoDevsDAO contract
//   const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
//   const cryptoDevsDAO = await CryptoDevsDAO.deploy(
//     fakeNftMarketplace.address,
//     CRYPTODEVS_NFT_CONTRACT_ADDRESS,
//     {
//       // This assumes your account has at least 1 ETH in it's account
//       // Change this value as you want
//       value: ethers.utils.parseEther("1"),
//     }
//   );
//   await cryptoDevsDAO.deployed();

//   console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });



const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
  const exchangeContract = await ethers.getContractFactory("Exchange");

  // here we deploy the contract
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevTokenAddress
  );
  await deployedExchangeContract.deployed();

  // print the address of the deployed contract
  console.log("Exchange Contract Address:", deployedExchangeContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });