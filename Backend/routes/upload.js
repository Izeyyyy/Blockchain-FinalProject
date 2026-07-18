const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const { Transaction } = require('@meshsdk/core');
const { wallet } = require('../blockchain');
const { appendRecord, getLastRecord } = require('../localIndex');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded. Field name must be "file".' });
    }

    // 1. Hash the file
    const fileHash = crypto.createHash('sha256').update(req.file.buffer).digest('hex');

    // 2. Figure out the previous record, to chain this one to it
    const last = getLastRecord();
    const previousTxHash = last ? last.txHash : 'genesis';

    // 3. Build a self-send transaction carrying the hash as metadata
    const tx = new Transaction({ initiator: wallet });
    const changeAddress = await wallet.getChangeAddress();

    tx.sendLovelace(changeAddress, '1000000'); // 1 ADA (testnet), sent back to self
    tx.setMetadata(674, {
      fileHash,
      previousTxHash,
      fileName: req.file.originalname,
      timestamp: Date.now(),
    });

    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);

    // 4. Save to the local index so the chain explorer can list it
    const record = appendRecord({
      fileName: req.file.originalname,
      fileHash,
      txHash,
      previousTxHash,
      timestamp: Date.now(),
    });

    res.json({
      message: 'File hashed and submitted to Cardano testnet.',
      record,
      note: 'Confirmation can take 20-60 seconds. Save the txHash to verify this file later.',
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to submit transaction.', details: err.message });
  }
});

module.exports = router;