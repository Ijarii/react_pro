const express = require('express');
const router = express.Router();

// Simulating an order database
const orders = [
    { id: 1, item: 'Pizza', status: 'Delivered' },
    { id: 2, item: 'Burger', status: 'Preparing' },
    { id: 3, item: 'Pasta', status: 'Out for delivery' }
];

// GET all orders
router.get('/', (req, res) => {
    res.json(orders); // Send all orders as JSON
});

module.exports = router;
