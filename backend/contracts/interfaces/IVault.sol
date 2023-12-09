// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IVault {
    event Deposit(
        uint256 indexed requestedLoanAmount,
        uint256 indexed amountToMint
    );
    event Withdraw(
        uint256 indexed amountToWithdraw,
        uint256 indexed repaymentAmount
    );

    function deposit(
        uint256 amountToDeposit,
        uint256 requestedLoanAmount
    ) external payable;

    function withdraw(uint256 repaymentAmount) external;

    function getVault(
        address userAddress
    ) external view returns (VaultDetails memory vault);

    function estimateCollateralAmount(
        uint256 repaymentAmount
    ) external view returns (uint256 collateralAmount);

    function estimateTokenAmount(
        uint256 depositAmount
    ) external view returns (uint256 tokenAmount);
}

struct VaultDetails {
    uint256 collateralAmount;
    uint256 debtAmount;
}
