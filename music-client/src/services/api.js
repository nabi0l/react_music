// src/services/api.js
const API_BASE_URL = "http://localhost:5000/api";

// Fetch trending tracks
export const fetchTrendingTracks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/music/trending`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching trending tracks:", error);
    throw error;
  }
};

// Fetch track preview
export const fetchTrackPreview = async (artist, track) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/music/preview?artist=${encodeURIComponent(
        artist
      )}&track=${encodeURIComponent(track)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching track preview:", error);
    throw error;
  }
};

// Add to cart
export const addToCart = async (trackId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/music/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ trackId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to add to cart");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Add to wishlist
export const addToWishlist = async (trackId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/music/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ trackId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to add to wishlist");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    throw error;
  }
};

// Fetch music data
export const fetchMusicData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/music`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching music data:", error);
    throw error;
  }
};
