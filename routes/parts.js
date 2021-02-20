const express = require('express');
const router = express.Router();
const storeParts = require('../mock-data/parts');
const partTypes = require('../mock-data/part-types');

router.get('/parts', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(storeParts);
});

router.get('/part-types', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(partTypes);
});

module.exports = router;