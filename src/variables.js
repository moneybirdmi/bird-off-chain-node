const variables = {
  WEB3_PROVIDER_ADDRESS:
    'wss://kovan.infura.io/ws/v3/2377373e9cc84228a6cea33645b511ea',

  //29 Jan 2021: changed ABI and CONTRACT_ADDRESS. done by timon#1213 discord
  CONTRACT_ADDRESS: '0x8e19f3d69d340eecd596487b0deaffd13444bf7f',
  ABI:
    '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"ethAddress","type":"address"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"OffChainRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"ethAddress","type":"address"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"UpdatedRequest","type":"event"},{"constant":true,"inputs":[],"name":"birdNest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRating","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getRatingByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minConsensus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_ethAddress","type":"address"},{"internalType":"string","name":"_key","type":"string"}],"name":"newChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"onChainRequests","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"ethAddress","type":"address"},{"internalType":"string","name":"key","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bool","name":"resolved","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ratings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"trackId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_valueResponse","type":"uint256"}],"name":"updateChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',

  PRIVATE_KEYS: [
    '0xca6630593fa827d514e3fe5dd63dac94bf150086c201941fd1fbec3c67055219',
    '0xf725cf1a50e4eeadf06b418dca953b535ab2818209076f895aadfa85638ae6e8',
    '0xe047a039568ccd24ad227ad87889877fd4c59c59ef78f34569ef28cd1d0d66e3',
    '0xd564438dc076a603f1bea4f087b8d588f71a3bb9850c7c90799de28510ef8cb9',
  ],
};

export default variables;
