require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: process.env.APP_GOERLI_URL,
      accounts: [process.env.APP_ACCOUNTS],
    },
  },
};
