
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {_id: 1, role_name: 'Administrator', description: 'Administrator role'},
        {_id: 2, role_name: 'Pengurus Gereja', description: 'Pengurus Gereja role'},
        {_id: 3, role_name: 'Pimpinan Komsel', description: 'Pimpinan Komsel role'}
      ]);
    });
};
