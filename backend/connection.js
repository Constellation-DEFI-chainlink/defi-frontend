// for WeatherConsumer.sol
require("@chainlink/env-enc").config();
// require('dotenv').config()

const { providers, Wallet } = require("ethers");

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;

if (!MUMBAI_RPC_URL) {
  throw new Error("Please set the MUMBAI_RPC_URL environment variable");
}

const provider = new providers.JsonRpcProvider(MUMBAI_RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY || "UNSET");
const signer = wallet.connect(provider);

module.exports = { provider, wallet, signer };
