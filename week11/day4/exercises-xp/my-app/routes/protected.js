const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = router;
