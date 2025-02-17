const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const provider = new HDWalletProvider({ 
  privateKeys:[process.env.PK]
  ,providerOrUrl:'https://rpc.c4ei.net'}
  )

module.exports = {
    networks: {
        // development: {
        //     host: "localhost",
        //     port: 7545,
        //     network_id: "*"
        // },
        // test: {
        //     host: "localhost",
        //     port: 8545,
        //     network_id: "*"
        // },
        mainnet: {
            url: "https://rpc.c4ei.net",
            provider: provider,
            chainId: 21004,
            network_id: 21004
        },
        // mainnet: {
        //     provider: function() {
        //         return new HDWalletProvider(
        //             process.env.MNEMONIC,
        //             `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`
        //         )
        //     },
        //     network_id: 1
        // },
        // kovan: {
        //     provider: function() {
        //         return new HDWalletProvider(
        //             process.env.MNEMONIC,
        //             `https://kovan.infura.io/v3/${process.env.INFURA_ID}`
        //         )
        //     },
        //     network_id: 42
        // }
    },

    compilers: {
        solc: {
            version: "0.6.12",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY
    }
};
