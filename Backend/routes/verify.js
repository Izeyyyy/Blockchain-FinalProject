const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const axios = require('axios');
const { findByFileHash } = require('../localIndex');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const BLOCKFROST_BASE_URL = 'https://cardano-preprod.blockfrost.io/api/v0';

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded. Field name must be "file".' });
    }

    // txHash can be supplied directly by the user (their "receipt"),
    // or we can try to look it up locally if they don't have it.
    let { txHash } = req.body;
    const recomputedHash = crypto.createHash('sha256').update(req.file.buffer).digest('hex');

    if (!txHash) {
      const localMatch = findByFileHash(recomputedHash);
      if (!localMatch) {
        return res.status(404).json({
          verified: false,
          message: 'No txHash provided and no local match found for this file.',
        });
      }
      txHash = localMatch.txHash;
    }

    // Ask Blockfrost directly — this is the actual source of truth.
    const response = await axios.get(`${BLOCKFROST_BASE_URL}/txs/${txHash}/metadata`, {
      headers: { project_id: process.env.BLOCKFROST_PROJECT_ID },
    });

    const storedHash = response.data?.[0]?.json_metadata?.fileHash;

    if (!storedHash) {
      return res.status(404).json({ verified: false, message: 'No metadata found for that txHash.' });
    }

    const verified = storedHash === recomputedHash;

    res.json({
      verified,
      message: verified
        ? 'Valid — file matches the on-chain record.'
        : 'Tampered — file does not match the on-chain record.',
      recomputedHash,
      storedHash,
      txHash,
    });
  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({
        verified: false,
        message: 'Transaction not found on-chain yet. It may still be confirming — try again shortly.',
      });
    }
    console.error('Verify error:', err);
    res.status(500).json({ error: 'Failed to verify file.', details: err.message });
  }
});

module.exports = router;