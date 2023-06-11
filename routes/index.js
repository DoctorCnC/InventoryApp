const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', function (req, res, next) {
  res.redirect('/category');
});

module.exports = router;
