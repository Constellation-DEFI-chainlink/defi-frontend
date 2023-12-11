// Sends individual function request from WeatherConsumer.sol
// It fetches the latest temperature for a particular area from openweathermap API
// Args include the latitude & longitude of your location &
// units- unit in which we want the temperature (standard, metric, imperial)
// some example args: Salt Lake City {40.75, -111.87, imperial}, New York City {40.71, -74.00, imperial}, Honolulu Hawaii {21.31, -157.86, imperial}, Stockholm, Sweden {59.33, 18.06, imperial}

// terminal command: node scripts/03_request.js

const { Contract } = require("ethers");
const fs = require("fs");
const path = require("path");
const { Location } = require("@chainlink/functions-toolkit");
require("@chainlink/env-enc").config();
// require('dotenv').config()

const { signer } = require("../connection.js");
const { abi } = require("../bin/contracts/WeatherConsumer.json");

const consumerAddress = "0x10FfA36116085350FaC5910d5Ca7E162D8211468";
const subscriptionId = "1003";
const encryptedSecretsRef = "0xa266736c6f744964006776657273696f6e1a65767c53"; //update if expired

const sendRequest = async () => {
  const latitude = "40";
  const longitude = "-74";
  const unit = "metric";
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
    [],
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
