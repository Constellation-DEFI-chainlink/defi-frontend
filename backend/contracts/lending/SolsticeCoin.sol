// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ISolsticeCoin.sol";

contract SolsticeCoin is ISolsticeCoin {
    uint public totalSupply;
    mapping(address => uint) public debtAmount;
    mapping(address => mapping(address => uint)) public allowance;
    string public name = "SolsticeCoin";
    string public symbol = "SC";
    uint8 public decimals = 18;

    function transfer(address recipient, uint amount) external returns (bool) {
        debtAmount[msg.sender] -= amount;
        debtAmount[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool) {
        allowance[sender][msg.sender] -= amount;
        debtAmount[sender] -= amount;
        debtAmount[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(uint amount) external {
        debtAmount[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        debtAmount[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}
