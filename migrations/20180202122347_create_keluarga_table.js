
exports.up = function(knex, Promise) {
    return knex.schema.createTable('keluarga', function (t) {
        t.increments('id').primary()
        t.string('nama_keluarga').notNullable()
        t.date('tanggal_pernikahan').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('keluarga')
};
