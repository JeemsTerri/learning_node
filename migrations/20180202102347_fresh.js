
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fresh', function (t) {
        t.increments('id').primary()
        t.string('nama').notNullable().unique()
        t.string('pimpinan')
        t.string('wilayah')
        t.text('description')
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('fresh')
};
