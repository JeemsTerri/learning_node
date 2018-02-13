var express = require('express');
var router = express.Router();

var User = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.fetchAll()
  .then(function(users) {
    // res.render('users/index', { title: 'Users' , users: users});
    res.json({ users });
  });
  // res.render('users/index', { title: 'Users' , users: allUsers});
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Login' });
});

router.get('/register', function(req, res, next){
  res.render('users/register', { title: 'Register' });
});

router.post('/register', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;

  

  User.register({name, email, password, username, role});
  
  console.log(name);
});

router.get('/create', function(req, res, next) {
  res.render('users/create', { title: 'Create User' });
});

// router.post('/create', function(req, res, next){
  
// });

module.exports = router;
