const lastfmService = require('../services/lastfmService');

const musicController = {
  getTrending: async (req, res) => {
    try {
      const tracks = await lastfmService.getTrendingChristianTracks();
      res.json(tracks);
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
      const results = await lastfmService.searchTracks(query);
      res.json(results);
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
      const trackInfo = await lastfmService.getTrackInfo(artist, track);
      res.json(trackInfo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch track details' });
    }
  }
};

// controllers/musicController.js
const getTrending = async (req, res) => {
  try {
    // Cache in memory for 1 hour
    if (!req.app.locals.trendingCache || 
        Date.now() - req.app.locals.trendingCache.timestamp > 3600000) {
      const tracks = await lastfmService.getTrendingTracksWithPreviews();
      req.app.locals.trendingCache = {
        data: tracks,
        timestamp: Date.now()
      };
    }
    
    res.json(req.app.locals.trendingCache.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending tracks' });
  }
};

module.exports = musicController;