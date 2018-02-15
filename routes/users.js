var express = require('express');
var router = express.Router();

var User = require('../models/Users').User;

var user = require('../models/Users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.fetchAll()
  .then(function(users) {
    // user.authenticate({
    //   username: 'jeemsterry',
    //   password: '111111'
    // });
    res.json({ users});
  });
  // users.fetchAll()
  // .then(function(users) {
  //   // res.render('users/index', { title: 'Users' , users: users});
  //   res.json({ users });
  // });
  // res.render('users/index', { title: 'Users' , users: allUsers});
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Login' });
});

router.post('/login', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  user
    .authenticate({
      username,
      password
    })
    .then(({ success }) => {
      if (success) {
        req.flash('success', 'You are now logged in');
        // res.sendStatus(200);
        res.redirect('/');
      }
      else res.sendStatus(401)
    })
})

router.get('/logout', function(){
  req.logout();
  req.flash('success', 'You are now logged out');
  req.redirect('/users/login');
})

router.get('/register', function(req, res, next){
  res.render('users/register', { title: 'Register' });
});

router.post('/register', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;

  // Form Validator
  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email','Email field is required').notEmpty();
  req.checkBody('email','Email is not valid').isEmail();
  req.checkBody('username','Username field is required').notEmpty().isLowercase();
  req.checkBody('password','Password field is required').notEmpty();
  req.checkBody('password2','Passwords do not match').equals(req.body.password);

  // Check Errors
  var errors = req.validationErrors();

  if(errors){
    res.render('register', {
  		errors: errors
  	});
  } else{
    user.register({name, email, username, password, role})

    req.flash('success', 'You are now registered and can login')

    // res.location('/')
    res.redirect('login')
  }
});

router.get('/create', function(req, res, next) {
  res.render('users/create', { title: 'Create User' });
});

// router.post('/create', function(req, res, next){
  
// });

module.exports = router;
