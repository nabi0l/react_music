const musicController = {
  getTrending: async (req, res) => {
    try {
      // Return empty array since Last.fm integration is removed
      res.json([]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending tracks' });
    }
  },

  search: async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
      }
      // Return empty results since Last.fm integration is removed
      res.json({ results: [] });
    } catch (error) {
      res.status(500).json({ error: 'Failed to search tracks' });
    }
  },

  getTrackDetails: async (req, res) => {
    try {
      const { artist, track } = req.query;
      if (!artist || !track) {
        return res.status(400).json({ error: 'Artist and track name are required' });
      }
      // Return empty track info since Last.fm integration is removed
      res.json({});
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch track details' });
    }
  }
};

// Keep the trending endpoint for backward compatibility
const getTrending = async (req, res) => {
  try {
    // Return empty array since Last.fm integration is removed
    res.json([]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending tracks' });
  }
};

// Add the getTrending method to the controller
musicController.getTrending = getTrending;

module.exports = musicController;