// for WeatherConsumer.sol
// decodes the bytes response from request into uint256
// terminal command: node scripts/04_readResponse.js
const { decodeResult, ReturnType } = require("@chainlink/functions-toolkit");
const { Contract } = require("ethers");

const { signer } = require("../connection.js");
const { abi } = require("../bin/contracts/WeatherConsumer.json");

const consumerAddress = "0x10FfA36116085350FaC5910d5Ca7E162D8211468";
const readResponse = async () => {
  const weatherConsumer = new Contract(consumerAddress, abi, signer);

  const responseBytes = await weatherConsumer.s_lastResponse();
  console.log("\nResponse Bytes : ", responseBytes);

  const decodedResponse = decodeResult(responseBytes, ReturnType.uint256);
  console.log("\nDecoded response from OpenWeathermap API:", decodedResponse);
};

readResponse().catch((err) => {
  console.log("Error reading response: ", err);
});
