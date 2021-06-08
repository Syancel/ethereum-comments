/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_KOVAN_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    kovan: {
      url: ALCHEMY_KOVAN_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
