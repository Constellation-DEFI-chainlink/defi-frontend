// deploys WeatherConsumer.sol. Deployed at address on network polygonMumbai:
// 0x4e84CF66dfF1c12C2B4857cA0e862940Bd083611
const { abi, bytecode } = require("../contracts/abi/WeatherConsumer.json");
const { wallet, signer } = require("../connection.js");
const { networks } = require("../networks.js");
const { ContractFactory, utils } = require("ethers");

const NETWORK = "polygonMumbai";

const routerAddress = networks[NETWORK].functionsRouter;
const donIdBytes32 = utils.formatBytes32String(networks[NETWORK].donId);

const deployWeatherConsumerContract = async () => {
  const contractFactory = new ContractFactory(abi, bytecode, wallet);

  console.log(`\nDeploying WeatherConsumer contract on network ${NETWORK}...`);
  const weatherConsumerContract = await contractFactory
    .connect(signer)
    .deploy(routerAddress, donIdBytes32);

  await weatherConsumerContract.deployed();
  console.log(`\nDeployed at address ${weatherConsumerContract.address}`);
};

deployWeatherConsumerContract().catch((err) => {
  console.log("Error deploying the Consumer Contract ", err);
});
