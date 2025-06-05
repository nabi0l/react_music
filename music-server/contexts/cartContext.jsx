import React, { useState, useEffect } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [userId, setUserId] = useState(() => {
    // Try to get userId from localStorage on initial render
    const storedUserId = localStorage.getItem("userId");
    return storedUserId ? parseInt(storedUserId) : null;
  });

  // Watch for token changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (token && storedUserId) {
      setUserId(parseInt(storedUserId));
    } else {
      setUserId(null);
    }
  }, []);

  // Helper function to get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) return {};
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // Load initial cart from local storage
  useEffect(() => {
    const loadCart = async () => {
      if (userId) {
        try {
          const response = await fetch(`http://localhost:5000/api/music/cart`, {
            headers: getAuthHeaders(),
          });
          if (response.ok) {
            const data = await response.json();
            if (data.success) {
              setCart(data.data);
            }
          }
        } catch (error) {
          console.error("Failed to load cart:", error);
        }
      } else {
        const localCart = localStorage.getItem("guestCart");
        if (localCart) {
          setCart(JSON.parse(localCart));
        }
      }
    };

    loadCart();
  }, [userId]);

  // Load initial favorites from local storage
  useEffect(() => {
    const loadFavorites = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `http://localhost:5000/api/music/wishlist`,
            {
              headers: getAuthHeaders(),
            }
          );
          if (response.ok) {
            const data = await response.json();
            if (data.success) {
              setFavorites(data.data);
            }
          }
        } catch (error) {
          console.error("Failed to load favorites:", error);
        }
      } else {
        const localFavorites = localStorage.getItem("guestFavorites");
        if (localFavorites) {
          setFavorites(JSON.parse(localFavorites));
        }
      }
    };

    loadFavorites();
  }, [userId]);

  return <div>{/* Render children components */}</div>;
};
