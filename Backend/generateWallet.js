// Run this ONCE with: npm run generate-wallet
// It creates a brand new Cardano testnet wallet.
// Save the mnemonic into your .env file as WALLET_MNEMONIC.
// Then fund the printed address using the testnet faucet.
 
const { MeshWallet } = require('@meshsdk/core');
 
async function generateWallet() {
  const mnemonic = MeshWallet.brew();
 
  const wallet = new MeshWallet({
    networkId: 0, // 0 = testnet
    key: { type: 'mnemonic', words: mnemonic },
  });
 
  const addresses = await wallet.getUnusedAddresses();
 
  console.log('\n=== SAVE THIS MNEMONIC INTO YOUR .env FILE ===');
  console.log(mnemonic.join(' '));
 
  console.log('\n=== FUND THIS ADDRESS USING THE TESTNET FAUCET ===');
  console.log(addresses[0]);
 
  console.log('\nFaucet: https://docs.cardano.org/cardano-testnets/tools/faucet/');
  console.log('(Select "Preprod" network to match your Blockfrost project)\n');
}
 
generateWallet().catch((err) => {
  console.error('Failed to generate wallet:', err);
});
 
