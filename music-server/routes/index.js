// routes/index.js
const express = require('express');
const router = express.Router();

// Import route files
const musicRoutes = require('./musicRoutes');
const songRoutes = require('./songRoutes');

// Route middleware
router.use('/music', musicRoutes);  // Handles /api/music endpoints
router.use('/songs', songRoutes);   // Handles /api/songs endpoints

// Export the router
module.exports = router;