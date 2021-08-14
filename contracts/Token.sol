// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title Token
 * @dev Approves Token Transfers and Construction
 * Using OpenZeppelin's ERC20 Token Contract
 */

contract Token is ERC20 {

  /* string memory name;
  string symbol;
  uint256 initialAmount; */

  constructor(string memory name, string memory symbol, uint initialAmount)
    ERC20(name, symbol)
  {
    _mint(msg.sender, initialAmount);
  }

}
