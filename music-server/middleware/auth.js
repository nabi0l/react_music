const jwt = require('jsonwebtoken');

module.exports = function(pool) {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'Authentication required' });
      }
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'musicroot');
      
      // Verify user exists in database
      const [users] = await pool.query('SELECT * FROM users WHERE id = ?', [decoded.id]);
      if (!users.length) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      req.user = users[0];
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
};