const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Add to favorites
router.post("/favorites", async (req, res) => {
  const { user_id, music_id } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO favorites (user_id, music_id) VALUES (?, ?)",
      [user_id, music_id]
    );
    res.status(201).json({ message: "Added to favorites" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Remove from favorites
router.delete("/favorites", async (req, res) => {
  const { user_id, music_id } = req.body;
  try {
    await pool.query(
      "DELETE FROM favorites WHERE user_id = ? AND music_id = ?",
      [user_id, music_id]
    );
    res.json({ message: "Removed from favorites" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Get user favorites
router.get("/favorites/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const [favorites] = await pool.query(
      `SELECT m.* FROM favorites f 
       JOIN music m ON f.music_id = m.id 
       WHERE f.user_id = ?`,
      [user_id]
    );
    res.json(favorites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Add to cart
router.post("/cart", async (req, res) => {
  const { user_id, music_id } = req.body;
  try {
    // First check if item already exists in cart
    const [existing] = await pool.query(
      "SELECT * FROM cart WHERE user_id = ? AND music_id = ?",
      [user_id, music_id]
    );
    
    if (existing.length > 0) {
      // Update quantity if exists
      await pool.query(
        "UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND music_id = ?",
        [user_id, music_id]
      );
    } else {
      // Insert new item
      await pool.query(
        "INSERT INTO cart (user_id, music_id, quantity) VALUES (?, ?, 1)",
        [user_id, music_id]
      );
    }
    
    res.status(201).json({ message: "Added to cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Get user cart
router.get("/cart/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const [cartItems] = await pool.query(
      `SELECT m.*, c.quantity FROM cart c 
       JOIN music m ON c.music_id = m.id 
       WHERE c.user_id = ?`,
      [user_id]
    );
    res.json(cartItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Remove from cart
router.delete("/cart", async (req, res) => {
  const { user_id, music_id } = req.body;
  try {
    await pool.query(
      "DELETE FROM cart WHERE user_id = ? AND music_id = ?",
      [user_id, music_id]
    );
    res.json({ message: "Removed from cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;