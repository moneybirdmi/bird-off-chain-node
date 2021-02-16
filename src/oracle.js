require('dotenv').config();

import request from 'request-promise-native';
import Web3 from 'web3';
import { updateRequest, newRequest } from './ethereum';

const start = () => {
  const addr = Web3.utils.toChecksumAddress(
    '0xcF01971DB0CAB2CBeE4A8C21bB7638aC1FA1c38C'
  );
  console.log('addr ', addr);
  newRequest((error, result) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log('new request', result.returnValues);

    const requestedUrl = `https://bird.money/analytics/address/${result.returnValues.ethAddress}`;
    let options = {
      uri: requestedUrl,
      json: true,
    };

    request(options).then(parseData(result)).then(updateRequest).catch(error);
  });
};

const parseData = (result) => (body) => {
  return new Promise((resolve, reject) => {
    let id, valueRetrieved;
    try {
      id = result.returnValues.id;
      valueRetrieved = (body[result.returnValues.key] || 0).toString();
    } catch (error) {
      reject(error);
      return;
    }
    resolve({
      id,
      valueRetrieved,
    });
  });
};

export default start;
