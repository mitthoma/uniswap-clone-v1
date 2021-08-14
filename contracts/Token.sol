// SPDX-License-Identifier: MIT

pragma solidity >= 0.5.0 < 0.9.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

 contract Token is ERC20 {
   constructor (string memory name, string memory symbol, uint256 initialSupply)
    ERC20(name, symbol)
     public {
     _mint(msg.sender, initialSupply);
   }
 }
