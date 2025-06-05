const express = require('express');
const musicController = require('../controllers/musicController');

const router = express.Router();

router.get('/trending', musicController.getTrending);
router.get('/search', musicController.search);
router.get('/track', musicController.getTrackDetails);

router.get('/track/:id/audio', async (req, res) => {
    try {
      const [rows] = await pool.query(
        'SELECT audio_url FROM tracks WHERE id = ?',
        [req.params.id]
      );
      if (rows.length) {
        res.json({ audioUrl: rows[0].audio_url });
      } else {
        res.status(404).json({ error: 'Track not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  });
  
module.exports = router;