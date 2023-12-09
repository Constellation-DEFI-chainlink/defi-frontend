// test/Vault.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vault", function () {
  let Vault;
  let vault;
  let owner;
  let addr1;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, ...addrs] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("SolsticeCoin");
    const token = await Token.deploy();

    const Oracle = await ethers.getContractFactory("PriceConsumerV3");
    const oracle = await Oracle.deploy();

    Vault = await ethers.getContractFactory("Vault");
    vault = await Vault.deploy(token.address, oracle.address);
  });

  it("Should deposit and withdraw", async function () {
    const depositAmount = ethers.utils.parseEther("1"); // 1 ETH
    const requestedLoanAmount = ethers.utils.parseEther("1"); // 1 ETH

    // Deposit
    await vault.deposit(requestedLoanAmount, { value: depositAmount });
    const vaultDetails = await vault.getVault(owner.address);

    expect(vaultDetails.collateralAmount).to.equal(requestedLoanAmount);
    expect(vaultDetails.debtAmount).to.not.equal(0);

    // Withdraw
    const estimatedCollateral = await vault.estimateCollateralAmount(
      vaultDetails.debtAmount
    );
    await vault.withdraw(vaultDetails.debtAmount);

    const finalVaultDetails = await vault.getVault(owner.address);
    expect(finalVaultDetails.collateralAmount).to.equal(0);
    expect(finalVaultDetails.debtAmount).to.equal(0);

    // Check if withdrawal amount matches the estimated collateral
    expect(estimatedCollateral).to.equal(depositAmount);
  });
});
