const Web3 = require("web3");
const dotenv = require('dotenv').config();

var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/'+process.env.API_Key));
web3.eth.ens.getAddress('ethereum.eth').then(function (address) {
    console.log(address);
});