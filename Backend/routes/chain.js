const express = require('express');
const { readIndex } = require('../localIndex');

const router = express.Router();

router.get('/', (req, res) => {
  const records = readIndex();
  res.json({ count: records.length, records });
});

module.exports = router;