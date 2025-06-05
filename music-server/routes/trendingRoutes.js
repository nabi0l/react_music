const express = require('express');
const router = express.Router();
const trendingController = require('../controllers/trendingController');

// Public endpoints
router.get('/', trendingController.getTrendingSongs);

// Admin endpoints
router.patch('/:id', 
  require('../middleware/authMiddleware'), 
  require('../middleware/adminMiddleware'),
  trendingController.updateTrendingStatus
);

module.exports = router;