// Stores secrets in DON for WeatherConsumer.sol
// Uploaded secrets to DON✅ encryptedSecretsReference: 0xa266736c6f744964006776657273696f6e1a657028a7
const { SecretsManager } = require("@chainlink/functions-toolkit");
const { signer } = require("../connection.js");
const { networks } = require("../networks.js");

require("@chainlink/env-enc").config();
// require('dotenv').config()

const NETWORK = "polygonMumbai";

const functionsRouterAddress = networks[NETWORK].functionsRouter;
const donId = networks[NETWORK].donId;

const encryptAndUploadSecrets = async () => {
  const secretsManager = new SecretsManager({
    signer,
    functionsRouterAddress,
    donId,
  });

  await secretsManager.initialize();

  if (!process.env.OPEN_WEATHER_API_KEY) {
    throw Error("OPEN_WEATHER_API_KEY not found in .env.enc file");
  }

  const secrets = {
    openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY,
  };

  const encryptedSecretsObj = await secretsManager.encryptSecrets(secrets);

  const gatewayUrls = networks[NETWORK].gatewayUrls;
  const slotId = 0;
  const minutesUntilExpiration = 1000;

  const {
    version, // Secrets version number (corresponds to timestamp when encrypted secrets were uploaded to DON)
    success, // Boolean value indicating if encrypted secrets were successfully uploaded to all nodes connected to the gateway
  } = await secretsManager.uploadEncryptedSecretsToDON({
    encryptedSecretsHexstring: encryptedSecretsObj.encryptedSecrets,
    gatewayUrls,
    slotId,
    minutesUntilExpiration,
  });

  if (success) {
    console.log("\nUploaded secrets to DON...");
    const encryptedSecretsReference =
      secretsManager.buildDONHostedEncryptedSecretsReference({
        slotId,
        version,
      });

    console.log(
      `\nMake a note of the encryptedSecretsReference: ${encryptedSecretsReference} `
    );
  }
};

encryptAndUploadSecrets().catch((err) => {
  console.log("Error encrypting and uploading secrets:  ", err);
});
