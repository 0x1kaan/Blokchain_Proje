require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://mainnet.infura.io/v3/d7844dfeb31f42acb90dba65fee0f395`,
      accounts: [process.env.d7844dfeb31f42acb90dba65fee0f395],
    }
  }
};
