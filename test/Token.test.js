const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { expect } = require('chai');

// importing chai as it might be helpful with unique asserts
// expect().to.equal();

// ethers is from hardhat, try ganache


describe('Token', () => {

  let token;

  // before(async () => {
  //   const Token = await ethers.getContractFactory('Token');
  //   token = await Token.deploy("Test Token", "ASS", 31337);
  //   await token.deployed();
  // });

  it('works', () => {
    let a = 'it works';
    expect(a).to.equal('it works')
  });

  it('sets a name', async () => {
    expect(await token.name()).to.equal("Test Token");
  });



});
