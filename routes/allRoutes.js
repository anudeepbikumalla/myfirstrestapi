// Central route aggregator
const express = require('express');
const router = express.Router();

// Import all route files
const userRoutes = require('./userRoutes');

// Use routes
router.use('/users', userRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date(),
  });
});

module.exports = router;
