var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jemaat' });
});

router.get('/create', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/remove', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/delete', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
