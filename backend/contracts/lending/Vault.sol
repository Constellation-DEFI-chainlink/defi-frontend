// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Oracle.sol";
import "./SolsticeCoin.sol";

contract Vault {
    SolsticeCoin public token;
    Oracle private oracle;

    uint public totalSupply;
    mapping(address => uint) public debtAmount;
    mapping(address => uint) public collateralAmount;
    mapping(address => VaultData) public vaults;

    struct VaultData {
        uint256 collateralAmount;
        uint256 debtAmount;
    }

    constructor(address _token, address _oracleAddress) {
        token = SolsticeCoin(_token);
        oracle = Oracle(_oracleAddress);
    }

    function _mint(address _to, uint amountToMint) internal {
        totalSupply += amountToMint;
        debtAmount[_to] += amountToMint;
    }

    function _burn(address _from, uint repaymentAmount) private {
        totalSupply -= repaymentAmount;
        debtAmount[_from] -= repaymentAmount;
    }

    function deposit(uint256 requestedLoanAmount) external payable {
        require(requestedLoanAmount == msg.value, "incorrect ETH amount");
        uint256 amountToMint = requestedLoanAmount * getEthUSDPrice();
        _mint(msg.sender, amountToMint);
        vaults[msg.sender].collateralAmount += requestedLoanAmount;
        vaults[msg.sender].debtAmount += amountToMint;
    }

    function withdraw(uint256 repaymentAmount) external {
        require(
            repaymentAmount <= vaults[msg.sender].debtAmount,
            "withdraw limit exceeded"
        );
        require(
            token.debtAmount(msg.sender) >= repaymentAmount,
            "not enough tokens in balance"
        );
        uint256 amountToWithdraw = repaymentAmount / getEthUSDPrice();
        _burn(msg.sender, repaymentAmount);
        vaults[msg.sender].collateralAmount -= amountToWithdraw;
        vaults[msg.sender].debtAmount -= repaymentAmount;
        payable(msg.sender).transfer(amountToWithdraw);
    }

    function getEthUSDPrice() public view returns (uint256) {
        int price = oracle.getLatestPrice();
        require(price > 0, "Invalid price from Oracle");
        return uint256(price);
    }

    function getToken() external view returns (address) {
        return address(token);
    }

    function getOracle() public view returns (address) {
        return address(oracle);
    }
}
