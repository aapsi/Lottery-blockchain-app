require("hardhat-deploy")
require("dotenv").config()
require("@nomiclabs/hardhat-waffle")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.11",
  networks: {
    sepolia: {
      url: "https://sepolia.example.com", // Replace with your Sepolia RPC URL
      chainId: 12345, // Replace with your Sepolia chain ID
      accounts: {
        mnemonic: "your twelve word mnemonic here", // Replace with your account mnemonic
      },
    },
    // ... other network configurations
  },
  // ... rest of your Hardhat configuration
};
