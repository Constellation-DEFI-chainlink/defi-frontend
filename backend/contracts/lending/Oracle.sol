pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Oracle {
    AggregatorV3Interface internal priceFeed;
    int private price;

    constructor() {
        price = 405807772492;
        priceFeed = AggregatorV3Interface(
            0x0000000000000000000000000000000000000000
        );
    }

    function getLatestPrice() public view returns (int) {
        return price;
    }

    function setPrice(int _price) external {
        price = _price;
    }
}
