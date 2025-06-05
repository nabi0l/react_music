const axios = require("axios");

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const BASE_URL = "http://ws.audioscrobbler.com/2.0/";

// List of well-known Christian artists
const CHRISTIAN_ARTISTS = [
  "Hillsong Worship",
  "Lauren Daigle",
  "Chris Tomlin",
  "Elevation Worship",
  "Bethel Music",
  "Kari Jobe",
  "MercyMe",
  "Casting Crowns",
  "TobyMac",
  "Jeremy Camp",
  "Hillsong United",
  "Passion",
  "Phil Wickham",
  "Maverick City Music",
  "Tauren Wells",
  "for KING & COUNTRY",
  "Matthew West",
  "Natalie Grant",
  "Steven Curtis Chapman",
  "Amy Grant",
];

const DEFAULT_IMAGE =
  "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";

// Helper function to get the best available image
const getBestImage = (images) => {
  if (!images || !Array.isArray(images)) return DEFAULT_IMAGE;

  // Try to get large image first, then medium, then small
  const sizes = ["extralarge", "large", "medium", "small"];
  for (const size of sizes) {
    const image = images.find((img) => img.size === size);
    if (image && image["#text"]) return image["#text"];
  }

  return DEFAULT_IMAGE;
};

const lastfmService = {
  getTrendingTracks: async () => {
    try {
      // Process artists in parallel for better performance
      const artistPromises = CHRISTIAN_ARTISTS.map(async (artist) => {
        try {
          // Get top tracks first
          const tracksResponse = await axios.get(BASE_URL, {
            params: {
              method: "artist.getTopTracks",
              artist: artist,
              api_key: LASTFM_API_KEY,
              format: "json",
              limit: 3,
            },
          });

          if (!tracksResponse.data.toptracks?.track) return [];

          // Process each track
          const trackPromises = tracksResponse.data.toptracks.track.map(
            async (track) => {
              try {
                // Get track info for album image
                const trackInfo = await axios.get(BASE_URL, {
                  params: {
                    method: "track.getInfo",
                    artist: artist,
                    track: track.name,
                    api_key: LASTFM_API_KEY,
                    format: "json",
                  },
                });

                // Get album image from track info if available
                let image = DEFAULT_IMAGE;
                if (trackInfo.data.track?.album?.image) {
                  image = getBestImage(trackInfo.data.track.album.image);
                }

                // If no album image, try artist image
                if (image === DEFAULT_IMAGE) {
                  const artistInfo = await axios.get(BASE_URL, {
                    params: {
                      method: "artist.getInfo",
                      artist: artist,
                      api_key: LASTFM_API_KEY,
                      format: "json",
                    },
                  });
                  if (artistInfo.data.artist?.image) {
                    image = getBestImage(artistInfo.data.artist.image);
                  }
                }

                return {
                  id: `${artist}-${track.name}`
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                  name: track.name,
                  artist: artist,
                  image: image,
                  listeners: parseInt(track.listeners) || 0,
                  playcount: parseInt(track.playcount) || 0,
                  duration: trackInfo.data.track?.duration
                    ? Math.floor(trackInfo.data.track.duration / 1000)
                    : 0,
                  url:
                    track.url ||
                    `https://www.last.fm/music/${encodeURIComponent(
                      artist
                    )}/_/${encodeURIComponent(track.name)}`,
                };
              } catch (error) {
                console.error(
                  `Error processing ${artist} - ${track.name}:`,
                  error.message
                );
                return null;
              }
            }
          );

          const artistTracks = await Promise.all(trackPromises);
          return artistTracks.filter((track) => track !== null);
        } catch (error) {
          console.error(`Error fetching data for ${artist}:`, error.message);
          return [];
        }
      });

      const artistsTracks = await Promise.all(artistPromises);
      const allTracks = artistsTracks.flat();

      // Remove duplicates and sort by listeners
      const uniqueTracks = allTracks
        .filter(
          (track, index, self) =>
            index ===
            self.findIndex(
              (t) => t.name === track.name && t.artist === track.artist
            )
        )
        .sort((a, b) => b.listeners - a.listeners)
        .slice(0, 10);

      return uniqueTracks;
    } catch (error) {
      console.error("Error in getTrendingTracks:", error);
      throw error;
    }
  },

  getTrackPreview: async (artist, trackName) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          method: "track.getInfo",
          artist: artist,
          track: trackName,
          api_key: LASTFM_API_KEY,
          format: "json",
        },
      });

      return {
        audioSrc: response.data.track?.preview_url || null,
        expiresAt: Date.now() + 30000,
      };
    } catch (error) {
      console.error("Last.fm preview error:", error);
      return {
        audioSrc: null,
        error: error.message
      };
    }
  },
};

module.exports = lastfmService;

module.exports = lastfmService;
