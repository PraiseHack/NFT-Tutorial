// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
   /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/

const nftContract = await ethers.getContractFactory("GameItem");

// here we deploy the contract
const deployedNFTContract = await nftContract.deploy();

// wait for the contract to deploy
await deployedNFTContract.deployed();

// print the address of the deployed contract
console.log("NFT Contract Address:", deployedNFTContract.address);
}

// call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });