const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so uploadFile here is a factory for instances of our UploadFile contract.
  */
  const uploadFile = await ethers.getContractFactory("UploadFile");

  // here we deploy the contract
  const deployedUploadFile = await uploadFile.deploy();
  // 10 is the Maximum number of whitelisted addresses allowed
  
  // Wait for it to finish deploying
  await deployedUploadFile.deployed();

  // print the address of the deployed contract
  console.log(
    "UploadFile Contract Address:",
    deployedUploadFile.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });