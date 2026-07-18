// Shared Blockfrost provider + wallet, reused by every route.
require('dotenv').config();
const { BlockfrostProvider, MeshWallet } = require('@meshsdk/core');

if (!process.env.BLOCKFROST_PROJECT_ID || !process.env.WALLET_MNEMONIC) {
  console.error(
    '\nMissing BLOCKFROST_PROJECT_ID or WALLET_MNEMONIC in .env — copy .env.example to .env and fill it in.\n'
  );
}

const provider = new BlockfrostProvider(process.env.BLOCKFROST_PROJECT_ID);

const wallet = new MeshWallet({
  networkId: 0, // 0 = testnet (Preprod/Preview)
  fetcher: provider,
  submitter: provider,
  key: {
    type: 'mnemonic',
    words: (process.env.WALLET_MNEMONIC || '').split(' '),
  },
});

module.exports = { provider, wallet };