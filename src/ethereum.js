require('dotenv').config();

import Web3 from 'web3';
import variables from './variables';

const web3 = new Web3(variables.WEB3_PROVIDER_ADDRESS);
const abi = JSON.parse(variables.ABI);
const address = variables.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(abi, address);

const sendMethod = (privateKey, encodedABI) => {
  return new Promise((resolve, reject) => {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log('account', account);
    var tx = {
      from: account.address,
      to: address,
      gas: 1000000,
      data: encodedABI,
    };
    const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);
    signPromise
      .then((signedTx) => {
        const sentTx = web3.eth.sendSignedTransaction(
          signedTx.raw || signedTx.rawTransaction
        );
        sentTx.on('receipt', (receipt) => {
          resolve(receipt);
        });
        sentTx.on('error', (err) => {
          reject(err);
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateRequest = ({ id, valueRetrieved }) => {
  return new Promise((resolve, reject) => {
    valueRetrieved = web3.utils.toWei(valueRetrieved);
    //valueRetrieved = web3.utils.toWei('2', 'ether');
    console.log('req id:', id, ' got value:', valueRetrieved);
    var privateKey;
    var encodedABI;
    privateKey = variables.PRIVATE_KEYS[process.env.ACCOUNT];
    encodedABI = contract.methods
      .updateChainRequest(id, valueRetrieved)
      .encodeABI();
    sendMethod(privateKey, encodedABI).then(resolve).catch(reject);

    //these 5 lines are for development only. todo comment these in production.
    privateKey = variables.PRIVATE_KEYS[3];
    encodedABI = contract.methods
      .updateChainRequest(id, valueRetrieved)
      .encodeABI();
    sendMethod(privateKey, encodedABI).then(resolve).catch(reject);
  });
};

export const newRequest = (callback) => {
  contract.events.OffChainRequest((error, result) => callback(error, result));
};
