
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      console.log('seeding role')
      return knex('roles').insert([
        {id: 1, role_name: 'Administrator', description: 'Administrator role'},
        {id: 2, role_name: 'Pengurus Gereja', description: 'Pengurus Gereja role'},
        {id: 3, role_name: 'Pimpinan Komsel', description: 'Pimpinan Komsel role'}
      ]);
    });
};
