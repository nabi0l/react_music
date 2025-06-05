// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/add', async (req, res) => {
  const { userId, trackId, trackData } = req.body;
  
  try {
    // Check if item already exists in cart
    const [existing] = await pool.query(
      'SELECT * FROM cart WHERE user_id = ? AND track_id = ?',
      [userId, trackId]
    );

    if (existing.length > 0) {
      return res.status(400).json({ error: 'Item already in cart' });
    }

    // Add to cart
    await pool.query(
      'INSERT INTO cart (user_id, track_id, track_data) VALUES (?, ?, ?)',
      [userId, trackId, JSON.stringify(trackData)]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});

router.post('/sync', async (req, res) => {
    const { userId, items } = req.body;
    
    try {
      // 1. Clear existing cart items
      await pool.query('DELETE FROM cart WHERE user_id = ?', [userId]);
      
      // 2. Insert new items
      const insertPromises = items.map(item => 
        pool.query(
          'INSERT INTO cart (user_id, track_id, track_data) VALUES (?, ?, ?)',
          [userId, item.id, JSON.stringify(item)]
        )
      );
      
      await Promise.all(insertPromises);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Cart sync failed' });
    }
  });

  router.get('/:userId', async (req, res) => {
    try {
      const [rows] = await pool.query(
        'SELECT track_data FROM cart WHERE user_id = ?',
        [req.params.userId]
      );
      res.json(rows.map(row => JSON.parse(row.track_data)));
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  });
  
  
module.exports = router;