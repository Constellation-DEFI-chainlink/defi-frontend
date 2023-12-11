// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Oracle {
    AggregatorV3Interface internal priceFeed;

    //  int public price;
    // sepolia: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    // mumbai: 0x0715A7794a1dc8e42615F059dD6e406A6594651A

    constructor() {
        priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
    }

    function getLatestPrice() public view returns (int) {
        (, /* uint80 roundID */ int price, , , ) = /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
        priceFeed.latestRoundData();
        return price;
    }
}
