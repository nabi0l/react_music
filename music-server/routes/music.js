const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");

module.exports = function(pool) {
  // Get trending music
  router.get("/trending", async (req, res) => {
    try {
      // In a real app, you would query your database here
      // For now, we'll return sample data
      const sampleData = {
        success: true,
        data: {
          singles: [
            {
              id: 1,
              title: "Sample Single",
              artist: "Sample Artist",
              image: "default.jpg",
              price: 0.99,
              isNew: true
            }
          ],
          albums: [
            {
              id: 2,
              title: "Sample Album",
              artist: "Sample Artist",
              image: "default.jpg",
              price: 9.99,
              isNew: false
            }
          ]
        }
      };
      res.json(sampleData);
    } catch (error) {
      console.error("Error fetching music:", error);
      res.status(500).json({ error: "Failed to fetch music" });
    }
  });

  // Cart endpoints
  router.get("/cart", checkAuth, async (req, res) => {
    try {
      const [items] = await pool.query(`
        SELECT c.id as cartItemId, s.* 
        FROM cart_items c
        JOIN songs s ON c.song_id = s.id
        WHERE c.user_id = ?
      `, [req.user.id]);

      res.json({
        success: true,
        data: items
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ error: "Failed to fetch cart" });
    }
  });

  // Add to cart
  router.post("/cart", checkAuth, async (req, res) => {
    try {
      const { trackId } = req.body;
      
      // Check if song exists
      const [song] = await pool.query("SELECT * FROM songs WHERE id = ?", [trackId]);
      if (!song.length) {
        return res.status(404).json({ error: "Song not found" });
      }

      // Check if already in cart
      const [existing] = await pool.query(
        "SELECT * FROM cart_items WHERE user_id = ? AND song_id = ?",
        [req.user.id, trackId]
      );

      if (existing.length) {
        // Update quantity
        await pool.query(
          "UPDATE cart_items SET quantity = quantity + 1 WHERE id = ?",
          [existing[0].id]
        );
        return res.json({ 
          success: true, 
          data: { ...song[0], cartItemId: existing[0].id } 
        });
      }

      // Add new item
      const [result] = await pool.query(
        "INSERT INTO cart_items (user_id, song_id) VALUES (?, ?)",
        [req.user.id, trackId]
      );

      res.json({ 
        success: true, 
        data: { ...song[0], cartItemId: result.insertId } 
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ error: "Failed to add to cart" });
    }
  });

  // Other endpoints would follow the same pattern...

  return router;
};