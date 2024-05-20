const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Get all customers
router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Get a single customer
router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
});

// Initialize with dummy data
router.post('/initialize', async (req, res) => {
  await Customer.deleteMany({});
  const customers = [
    { name: 'John Doe', email: 'john@example.com', balance: 1000 },
    { name: 'Jane Doe', email: 'jane@example.com', balance: 2000 },
    { name: 'Alice Johnson', email: 'alice@example.com', balance: 1500 },
    { name: 'Bob Smith', email: 'bob@example.com', balance: 500 },
    { name: 'Charlie Brown', email: 'charlie@example.com', balance: 3000 },
    { name: 'David Wilson', email: 'david@example.com', balance: 2500 },
    { name: 'Eva Adams', email: 'eva@example.com', balance: 1200 },
    { name: 'Frank Miller', email: 'frank@example.com', balance: 1800 },
    { name: 'Grace Lee', email: 'grace@example.com', balance: 2200 },
    { name: 'Henry Kim', email: 'henry@example.com', balance: 1400 },
  ];
  await Customer.insertMany(customers);
  res.json({ message: 'Customers initialized' });
});

module.exports = router;
