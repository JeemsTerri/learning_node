
exports.up = function(knex, Promise) {
    return knex.schema.createTable('appconfig', function (t) {
        t.integer('nama_gereja').notNullable().primary()
        t.integer('alamat_gereja').unsigned().notNullable().references('_id').inTable('jemaat')
        t.integer('pimpinan').notNullable()
        t.integer('logo').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
  
};
