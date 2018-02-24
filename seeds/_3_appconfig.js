
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appconfig').del()
    .then(function () {
      // Inserts seed entries
      console.log('seeding appconfig')
      return knex('appconfig').insert([
        {
          nama_gereja: "GBI Miracle Service", 
          alamat_gereja: 'Lippo Plaza Lt. 1, Jl. Laksda Adisucipto No. 32-34, Demangan, Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55271',
          kota: "Yogyakarta",
          provinsi: "Daerah Istimewa Yogyakarta",
          pimpinan: " ",
          logo: "noimage"
        }
      ]);
    });
};
