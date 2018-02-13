var User = require('../models/Users');

var adminUser = {
    name: 'Jeems Terri',
    username: 'jeemsterry',
    password: '111111',
    email: 'jeems@joelmedia.co.id',
    role: '1'
}

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return User.register(adminUser);
        // return knex('users').insert([
        //   {_id: 1, role_name: 'Administrator', description: 'Administrator role'},
        //   {_id: 2, role_name: 'Pengurus Gereja', description: 'Pengurus Gereja role'},
        //   {_id: 3, role_name: 'Pimpinan Komsel', description: 'Pimpinan Komsel role'}
        // ]);
      });
  };
  