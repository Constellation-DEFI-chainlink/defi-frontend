// for contract verification
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;

module.exports = {
  solidity: {
    version: "0.8.19", // Update this line to the correct version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    polygonMumbai: {
      chainId: 80001,
      accounts: [PRIVATE_KEY],
      url: MUMBAI_RPC_URL,
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};
