import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_BASE_URL = "http://localhost:5000/api";

  // Load user data
  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (token && userId) {
          // Load authenticated user's data
          const [cartRes, favRes] = await Promise.all([
            fetch(`${API_BASE_URL}/music/cart`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),
            fetch(`${API_BASE_URL}/music/wishlist`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),
          ]);

          const cartData = await cartRes.json();
          const favData = await favRes.json();

          if (cartData.success) setCart(cartData.data || []);
          if (favData.success) setFavorites(favData.data || []);
        } else {
          // Load guest data
          const guestCart = JSON.parse(
            localStorage.getItem("guestCart") || "[]"
          );
          const guestFavs = JSON.parse(
            localStorage.getItem("guestFavorites") || "[]"
          );
          setCart(guestCart);
          setFavorites(guestFavs);
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Add item to cart
  const addToCart = async (item) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        // Authenticated user
        const response = await fetch(`${API_BASE_URL}/music/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ trackId: item.id }),
        });

        if (response.ok) {
          const data = await response.json();
          setCart((prev) => [...prev, data.data]);
        }
      } else {
        // Guest user
        const newCart = [...cart, item];
        setCart(newCart);
        localStorage.setItem("guestCart", JSON.stringify(newCart));
      }
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await fetch(`${API_BASE_URL}/music/cart/${itemId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      const newCart = cart.filter((item) => item.id !== itemId);
      setCart(newCart);
      localStorage.setItem("guestCart", JSON.stringify(newCart));
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };

  // Toggle favorite
  const toggleFavorite = async (itemId, isFavorite) => {
    try {
      const token = localStorage.getItem("token");

      if (isFavorite) {
        // Remove from favorites
        if (token) {
          await fetch(`${API_BASE_URL}/music/wishlist/${itemId}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        setFavorites((prev) => prev.filter((item) => item.id !== itemId));
      } else {
        // Add to favorites
        const item = { id: itemId }; // You should replace this with actual item data
        if (token) {
          const response = await fetch(`${API_BASE_URL}/music/wishlist`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ trackId: itemId }),
          });
          const data = await response.json();
          setFavorites((prev) => [...prev, data.data]);
        } else {
          const newFavs = [...favorites, item];
          setFavorites(newFavs);
          localStorage.setItem("guestFavorites", JSON.stringify(newFavs));
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // Update cart quantity
  const updateCartQuantity = (itemId, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Sync guest data after login
  const syncGuestData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
      const guestFavs = JSON.parse(
        localStorage.getItem("guestFavorites") || "[]"
      );

      // Sync cart
      await Promise.all(
        guestCart.map((item) =>
          fetch(`${API_BASE_URL}/music/cart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ trackId: item.id }),
          }).catch(console.error)
        )
      );

      // Sync favorites
      await Promise.all(
        guestFavs.map((item) =>
          fetch(`${API_BASE_URL}/music/wishlist`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ trackId: item.id }),
          }).catch(console.error)
        )
      );

      // Clear guest data
      localStorage.removeItem("guestCart");
      localStorage.removeItem("guestFavorites");
    } catch (error) {
      console.error("Failed to sync guest data:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        isLoading,
        addToCart,
        removeFromCart,
        toggleFavorite,
        updateCartQuantity,
        setUserId,
        syncGuestData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
