var User = require('../models/Users');

var dummyUser = [{
    name: 'Amanda Brownies',
    username: 'amanda',
    password: 'amanda',
    email: 'amandabrownies@gmail.com',
    reset_password: '',
    role: '3'
  },
  {
    name: 'Jeffrey Sukarlan',
    username: 'jeffrey',
    password: 'jeffrey',
    email: 'jeffrey@gmail.com',
    reset_password: '',
    role: '3'
  },
  {
    name: 'Kirana Masako',
    username: 'kirana',
    password: 'kirana',
    email: 'kirana@gmail.com',
    reset_password: '',
    role: '3'
  }
]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      console.log('seeding User dummy')
      for (var i in dummyUser){
        console.log(dummyUser[i])
        User.register(dummyUser[i]);
      }
      // return User.register(dummyUser);
    });
};
