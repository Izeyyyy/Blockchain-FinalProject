require('dotenv').config();
const express = require('express');
const cors = require('cors');

const uploadRoute = require('./routes/upload');
const verifyRoute = require('./routes/verify');
const chainRoute = require('./routes/chain');
const adminRoute = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/upload', uploadRoute);
app.use('/verify', verifyRoute);
app.use('/chain', chainRoute);
app.use('/admin', adminRoute);

app.get('/', (req, res) => {
  res.send('Document Integrity Checker backend is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});