const sessionStore = {
  cart: {},
  wishlist: {}
};

// Generate a unique session ID
const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Get or create a session ID from request
const getSessionId = (req) => {
  const sessionId = req.cookies.sessionId || generateSessionId();
  return sessionId;
};

// Get cart items for a session
const getCartItems = (sessionId) => {
  return sessionStore.cart[sessionId] || [];
};

// Add item to cart
const addToCart = (sessionId, songId) => {
  if (!sessionStore.cart[sessionId]) {
    sessionStore.cart[sessionId] = [];
  }
  const existingItem = sessionStore.cart[sessionId].find(item => item.songId === songId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    sessionStore.cart[sessionId].push({ songId, quantity: 1 });
  }
  return sessionStore.cart[sessionId];
};

// Get wishlist items for a session
const getWishlistItems = (sessionId) => {
  return sessionStore.wishlist[sessionId] || [];
};

// Add item to wishlist
const addToWishlist = (sessionId, songId) => {
  if (!sessionStore.wishlist[sessionId]) {
    sessionStore.wishlist[sessionId] = [];
  }
  if (!sessionStore.wishlist[sessionId].includes(songId)) {
    sessionStore.wishlist[sessionId].push(songId);
  }
  return sessionStore.wishlist[sessionId];
};

module.exports = {
  getSessionId,
  getCartItems,
  addToCart,
  getWishlistItems,
  addToWishlist
};
