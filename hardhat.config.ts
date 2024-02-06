import dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';

dotenv.config();


export default {
  solidity: {
    version: '0.8.16',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    PegasusTestnet: {
      url: 'https://replicator.pegasus.lightlink.io/rpc/v1',
      chainId: 1891,
      accounts: [process.env.PRIVATE_KEY],
    },
  
  },
}