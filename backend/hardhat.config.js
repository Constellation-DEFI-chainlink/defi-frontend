// for contract verification
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "^0.8.0",
      },
      {
        version: "^0.8.19",
      },
    ],
  },
  networks: {
    polygonMumbai: {
      chainId: 80001,
      accounts: [PRIVATE_KEY],
      url: MUMBAI_RPC_URL,
      // verifyApiKey: process.env.POLYGONSCAN_API_KEY,
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },

  // paths: {
  //   sources: "./contracts/lending/",
  //   tests: "./test",
  //   cache: "./cache",
  //   artifacts: "./artifacts",
  // },
  mocha: {
    timeout: 40000,
  },
};
