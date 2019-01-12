const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const { mnemonic, APIRoute } = require('../env/truffle-wallet');

const provider = new HDWalletProvider(mnemonic, APIRoute);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from account: ${accounts[0]}`);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: `0x${compiledFactory.bytecode}` })
    .send({ from: accounts[0], gas: 1000000 });

  console.log(`Contracted deployed to ${result.options.address}`);
};

deploy();