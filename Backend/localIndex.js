const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'chain.json');

function readIndex() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return raw ? JSON.parse(raw) : [];
}

function appendRecord(record) {
  const records = readIndex();
  records.push(record);
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
  return record;
}

function getLastRecord() {
  const records = readIndex();
  return records.length > 0 ? records[records.length - 1] : null;
}

function findByFileHash(fileHash) {
  const records = readIndex();
  return records.find((r) => r.fileHash === fileHash) || null;
}

module.exports = { readIndex, appendRecord, getLastRecord, findByFileHash };