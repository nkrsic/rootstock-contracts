require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    rootstockTestnet: {
      url: "https://public-node.testnet.rsk.co", 
      chainId: 31,
      gasPrice: "auto",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        initialIndex: 0,
        count: 20,
      },
    }
  }
};


