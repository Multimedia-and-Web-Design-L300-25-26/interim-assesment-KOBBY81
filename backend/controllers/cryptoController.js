const Crypto = require('../models/Crypto');

const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.json(cryptos);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 }).limit(10);
    res.json(gainers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 }).limit(10);
    res.json(newListings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    const crypto = new Crypto({
      name,
      symbol,
      price,
      image,
      change24h
    });

    await crypto.save();
    res.status(201).json(crypto);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  addCrypto
};