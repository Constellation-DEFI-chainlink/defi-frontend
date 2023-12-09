// deployed on polygonMumbai:0x78ea1c053867f1d9a4c27cfe307ebe9be06a6d25
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract MockOracle {
    AggregatorV3Interface internal priceFeed;
    int private price;

    constructor() {
        price = 405807772492;
        priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
    }

    function getLatestPrice() public view returns (int) {
        return price;
    }

    function setPrice(int _price) external {
        price = _price;
    }
}
