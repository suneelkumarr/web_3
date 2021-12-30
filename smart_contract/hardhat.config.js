require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/07_XjwBDefaHN69-ITilbkg2UM0Jpxbk',
      accounts: ['82df976487e26d8733fa17f00a5beee03c0d3171b6e58f01dc791df18224f335'],
    },
  },
};