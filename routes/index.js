var express = require('express');
var router = express.Router();

const _isAuth = require('../helpers/ensureAuth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', _isAuth, function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

module.exports = router;
