// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "../interfaces/ISolsticeCoin.sol";

contract SolsticeCoin is ERC20, ERC20Permit, ISolsticeCoin {
    constructor() ERC20("SolsticeCoin", "SC") ERC20Permit("SolsticeCoin") {}

    function mint(address to, uint256 amount) external override {
        _mint(to, amount);
    }

    function burnFrom(address account, uint256 value) external override {
        _burn(account, value);
    }
}
