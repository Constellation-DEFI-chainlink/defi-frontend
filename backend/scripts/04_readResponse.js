// for WeatherConsumer.sol
const { decodeResult, ReturnType } = require("@chainlink/functions-toolkit");
const { Contract } = require("ethers");

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/WeatherConsumer.json");

const consumerAddress = "0x091513F3013bdc352f9000F7D6236aA0aA8c3C52";
const readResponse = async () => {
  const weatherConsumer = new Contract(consumerAddress, abi, signer);

  const responseBytes = await weatherConsumer.s_lastResponse();
  console.log("\nResponse Bytes : ", responseBytes);

  const decodedResponse = decodeResult(responseBytes, ReturnType.string);

  console.log("\nDecoded response from OpenAI/ChatGPT:", decodedResponse);
};

readResponse().catch((err) => {
  console.log("Error reading response: ", err);
});
