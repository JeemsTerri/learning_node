
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jemaat').del()
    .then(function () {
      // Inserts seed entries
      console.log('seeding jemaat')
      return knex('jemaat').insert([
        {
          firstname:  "Amanda",
          lastname:  "Brownies",
          dob:  "1993-08-17",
          pob:  "Semarang",
          address:  "Jl. Mangga 3 No 313, Pondok Tjandra",
          city:  "Yogyakarta",
          provinsi: "Jawa Tengah",
          rt:  "002",
          rw:  "003",
          kodepos:  "604211",
          gender:  "P",
          phone:  "085645457511",
          gol_darah:  "O",
          pelayanan:  "Singer",
          // user_id: '2',
          // role_id: '3'
        },
        {
          firstname:  "Jeffrey",
          lastname:  "Sukarlan",
          dob:  "1990-02-17",
          pob:  "Yogyakarta",
          address:  "Jl. Durian 3 No 033, Pondok Tjandra",
          city:  "Yogyakarta",
          provinsi: "Jawa Tengah",
          rt:  "004",
          rw:  "002",
          kodepos:  "604211",
          gender:  "L",
          phone:  "085645666511",
          gol_darah:  "AB",
          pelayanan:  "Penerima Tamu",
          // user_id: '3',
          // role_id: '3'
        },
        {
          firstname:  "Kirana",
          lastname:  "Masako",
          dob:  "1986-12-17",
          pob:  "Yogyakarta",
          address:  "Jl. Jeruk 1 No 133, Pondok Tjandra",
          city:  "Yogyakarta",
          provinsi: "Jawa Tengah",
          rt:  "007",
          rw:  "001",
          kodepos:  "604211",
          gender:  "L",
          phone:  "085446666511",
          gol_darah:  "B",
          pelayanan:  "Pemain Musik",
          // user_id: '4',
          // role_id: '3'
        }
      ]);
    });
};
