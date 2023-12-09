// creates listener for new request and prints response
// terminal command: node listen.js
const {
  ResponseListener,
  decodeResult,
  ReturnType,
} = require("@chainlink/functions-toolkit");

require("@chainlink/env-enc").config("../.env.enc");

const { networks } = require("./networks.js");
const { provider } = require("./connection.js");

const NETWORK = "polygonMumbai";
const subscriptionId = "1003";

const responseListener = new ResponseListener({
  provider,
  functionsRouterAddress: networks[NETWORK].functionsRouter,
});

console.log("\nListening....");
responseListener.listenForResponses(subscriptionId, (response) => {
  if (!response.errorString) {
    console.log(
      "\nFunctions response decodes to a uint256 value of:  ",
      decodeResult(response.responseBytesHexstring, ReturnType.uint256)
    );
  } else {
    console.log("\nError during functions execution:  ", response.errorString);
  }
});

// Remove existing listener
process.on("SIGINT", () => {
  console.log("Removing Listeners...");
  responseListener.stopListeningForResponses();
});
