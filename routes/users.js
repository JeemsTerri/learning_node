var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const knex = require('knex')(require('../knexfile'));

const _isAuth = require('../helpers/ensureAuth');

var User = require('../models/Users').User;

var user = require('../models/Users');

const options = {passReqToCallback: true, failureFlash: true};

/* GET all users listing. */
router.get('/', _isAuth, function(req, res, next) {

  User.fetchAll()
  .then(function(users) {
    res.render('users/index', { title: 'Users' , users: users});
  });

});

// GET users with spesific roles
// router.get('/', _isAuth, function(req, res, next) {
//   User.
// });

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  knex('users').where({_id}).first()
  .then((user) => { done(null, user); })
  .catch((err) => { done(err,null); });
});

passport.use(new LocalStrategy(options, ( req, username, password, done) => {
  knex('users').where({ username }).first()
  .then((usr) => {
    if (!usr) return done(null, false, {message: 'Incorrect username.'});
    const { hash } = user.checkPassword({ password, salt: usr.salt })

    if (hash !== usr.encrypted_password) 
    {
      return done(null, false, {message: 'Incorrect password.'});
    }
    
    return done(null, usr, { message: 'You have successfully login.' });
  })
  .catch((err) => { return done(err); });
}));

router.post('/login', (req, res, next) => {

  // Manual Login Method
  var username = req.body.username;
  var password = req.body.password;

  req.checkBody('username','Username field is required').notEmpty().isLowercase();
  req.checkBody('password','Password field is required').notEmpty();

  // Check Errors
  var errors = req.validationErrors();

  if(errors){
    res.render('users/login', {
      errors: errors
    });
  };

  passport.authenticate('local',{failureFlash: true}, function( err, user, info) {
    if (err) { return req.flash('error', info.message), next(err); }
    if (!user) { 
      
      return res.render('users/login', { message: info.message })
    }
    req.logIn(user, function(err) {
      if (err) { return req.flash('error', info), next(err); }
      return req.flash('success', info.message), res.redirect('/');
    });
  })(req, res, next);
    
    

  // if(errors){
  //   res.render('users/login', {
  //     errors: errors
  //   });
  // } else {
  //   user
  //   .authenticate({
  //     username,
  //     password
  //   })
  //   .then(({ user, success, msg }) => {
  //     console.log( user, success, msg)
  //     if(!success) {
  //       req.flash('error', msg)
  //       res.redirect('login');
  //     } else {
  //       req.flash('success', 'You are now logged in');
  //       // res.sendStatus(200);
  //       res.redirect('/');
  //     }
  //     res.sendStatus(401)
  //   })
  // }

  
})

router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/users/login');
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
    res.render('users/register', {
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
