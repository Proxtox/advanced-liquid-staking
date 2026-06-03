// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Staking Core
contract StakingCore {
    address public admin;
    mapping(address => uint256) public staked;

    constructor() {
        admin = msg.sender;
    }

    function stake(uint256 amount) external {
        staked[msg.sender] += amount;
    }

    function unstake(uint256 amount) external {
        require(staked[msg.sender] >= amount, "Insufficient stake");
        staked[msg.sender] -= amount;
    }
}