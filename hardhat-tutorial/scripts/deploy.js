const {ethers} = require('hardhat');
require('dotenv').config({path:".env"});
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants')

async function main(){
    //Address of whitelist Contract that you deployed in previous module.
    const whitelistContract  = WHITELIST_CONTRACT_ADDRESS;
    //Url from which we can  extract metadata for crypto dev nft.
    const metadataURL = METADATA_URL

    /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  // Now deploy the  contract.
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
      metadataURL,
      whitelistContract
  )

  // print the  address of deployed contract.
  console.log("Crypto Devs Contract Address:", deployedCryptoDevsContract.address)
}

// call the main function and catch the error if any 
main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  })