// All API Routes will be handled here

var express = require('express');
var router = express.Router();

// API -- Generate token for auth.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jemaat' });
});

module.exports = router;
