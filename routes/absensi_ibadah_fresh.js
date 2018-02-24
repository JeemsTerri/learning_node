var express = require('express');
var router = express.Router();

const _isAuth = require('../helpers/ensureAuth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('absensi_ibadah_fresh/index', { title: 'Absensi Fresh' });
});

module.exports = router;
