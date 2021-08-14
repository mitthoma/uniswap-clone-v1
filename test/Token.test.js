const Token = artifacts.require('Token');
var chai = require('chai');
const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token Test", async function(accounts) {
  let token_instance;
  let totalSupply;
  let root_account;
  let recipient_account;

  beforeEach('create the deployed instance of the contract you are testing', async () => {

    token_instance = await Token.deployed();
    totalSupply = await token_instance.totalSupply();
    root_account = await accounts[0];
    recipient_account = await accounts[1];

  });

  it('should place all tokens in my account', async () => {

    expect(await token_instance.balanceOf(root_account)).to.be.a.bignumber.that.equals(totalSupply);
  });

  // test your ERC20 functions

  it('transfers from one wallet to another', async () => {

    const transferAmount = 5;

    await expect(token_instance.transfer(recipient_account, transferAmount))
    .to.eventually.be.fulfilled;
    await expect(token_instance.balanceOf(root_account))
    .to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(transferAmount)))
    await expect(token_instance.balanceOf(recipient_account))
    .to.eventually.be.a.bignumber.equal(new BN(transferAmount));

  });

  


});
