const axios = require('axios');

const LAST_FM_API_KEY = process.env.LAST_FM_API_KEY;
const LAST_FM_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

const lastFmService = {
    async searchArtist(query) {
        try {
            const response = await axios.get(LAST_FM_BASE_URL, {
                params: {
                    method: 'artist.search',
                    artist: query,
                    api_key: LAST_FM_API_KEY,
                    format: 'json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error searching artist:', error);
            throw error;
        }
    },

    async getArtistInfo(artistName) {
        try {
            const response = await axios.get(LAST_FM_BASE_URL, {
                params: {
                    method: 'artist.getinfo',
                    artist: artistName,
                    api_key: LAST_FM_API_KEY,
                    format: 'json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error getting artist info:', error);
            throw error;
        }
    },

    async getArtistTopTracks(artistName) {
        try {
            const response = await axios.get(LAST_FM_BASE_URL, {
                params: {
                    method: 'artist.gettoptracks',
                    artist: artistName,
                    api_key: LAST_FM_API_KEY,
                    format: 'json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error getting top tracks:', error);
            throw error;
        }
    }
};

module.exports = lastFmService;
