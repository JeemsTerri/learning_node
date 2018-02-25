"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posisi_keluarga', function (t) {
        t.increments('id').primary()
        t.string('posisi').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posisi_keluarga')
};
