
exports.up = function(knex, Promise) {
    return knex.schema.createTable('appconfig', function (t) {
        t.string('nama_gereja').notNullable().primary()
        t.string('alamat_gereja').notNullable()
        t.string('kota').notNullable()
        t.string('provinsi').notNullable()
        t.string('pimpinan').notNullable()
        t.string('logo').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
  
};
