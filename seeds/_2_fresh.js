
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fresh').del()
    .then(function () {
      // Inserts seed entries
      console.log('seeding fresh')
      return knex('fresh').insert([
        {id: 1,
          nama: 'Sheqina Glory',
        },
        {id: 2,
          nama: 'Joshion',},
        {id: 3,
          nama: 'Mahanaim',}
      ]);
    });
};
