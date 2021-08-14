var Token = artifacts.require("Token.sol");
var Dex = artifacts.require("Dex.sol");
var Factory = artifacts.require('Factory.sol');

module.exports = async function(deployer) {
  await deployer.deploy(Token, "TEST", 'TEST', 1000000);
};
