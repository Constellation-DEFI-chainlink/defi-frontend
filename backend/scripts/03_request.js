// Sends function request for WeatherConsumer.sol
// Request made✅ Request Id: 0x2f10dc84b267fea7aa8d7d17948598966d059cde237e214da7788f51240b69f2
// TxHash: 0x413ab101a01074d419f10ff4e34dd7ffe441292bdcace75a2570222fc060740b
const { Contract } = require("ethers");
const fs = require("fs");
const path = require("path");
const { Location } = require("@chainlink/functions-toolkit");
require("@chainlink/env-enc").config();
// require('dotenv').config()

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/WeatherConsumer.json");

const consumerAddress = "0x4e84CF66dfF1c12C2B4857cA0e862940Bd083611";
const subscriptionId = "1003";
const encryptedSecretsRef = "0xa266736c6f744964006776657273696f6e1a657028a7";

const sendRequest = async () => {
  const latitude = "40.71";
  const longitude = "-74.00";
  const unit = "imperial";
  const args = [latitude, longitude, unit];
  const callbackGasLimit = 300_000;

  if (!consumerAddress || !encryptedSecretsRef || !subscriptionId) {
    throw Error("Missing required environment variables.");
  }
  const weatherConsumer = new Contract(consumerAddress, abi, signer);

  const source = fs
    .readFileSync(path.resolve(__dirname, "../weather-source.js"))
    .toString();

  console.log("\n Sending the Request....");
  const requestTx = await weatherConsumer.sendRequest(
    source,
    Location.DONHosted,
    encryptedSecretsRef,
    args,
    [], // bytesArgs can be empty
    subscriptionId,
    callbackGasLimit
  );

  const txReceipt = await requestTx.wait(1);
  const requestId = txReceipt.events[2].args.id;
  console.log(
    `\nRequest made.  Request Id is ${requestId}. TxHash is ${requestTx.hash}`
  );
};

sendRequest().catch((err) => {
  console.log("\nError making the Functions Request : ", err);
});
