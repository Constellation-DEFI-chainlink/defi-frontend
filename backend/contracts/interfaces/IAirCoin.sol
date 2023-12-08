// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
@title The interface for the stable coin token contract
*/
interface IAirCoin {
    // #### Function definitions

    /**
    @notice Mints a specified amount of tokens to an account
    @param to  the account to receive the new tokens
    @param amount  the amount to be minted
     */
    function mint(address to, uint256 amount) external;
}
