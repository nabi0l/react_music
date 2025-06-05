// src/services/musicApi.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // or your chosen API key

export const fetchTrendingChristianSongs = async () => {
  try {
    // Example using YouTube API
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: "christian worship music 2024",
          type: "video",
          maxResults: 10,
          order: "viewCount", // Get most viewed (trending)
          key: API_KEY,
        },
      }
    );

    return response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      artist: item.snippet.channelTitle,
      image:
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.default.url,
      tag: "Trending",
    }));
  } catch (error) {
    console.error("Error fetching trending songs:", error);
    return []; // Return empty array if error
  }
};
