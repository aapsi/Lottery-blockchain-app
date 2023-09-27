require("hardhat-deploy")
require("dotenv").config()
require("@nomiclabs/hardhat-waffle")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.11",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Replace with your Sepolia RPC URL
      chainId: 11155111, // Replace with your Sepolia chain ID
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
    },
    // ... other network configurations
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  // ... rest of your Hardhat configuration
};
