const express = require('express');
const { getAllCryptos, getTopGainers, getNewListings, addCrypto } = require('../controllers/cryptoController');

const router = express.Router();

router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', addCrypto);

module.exports = router;