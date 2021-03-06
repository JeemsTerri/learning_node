"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posisi_keluarga', function (t) {
        t.increments('id').primary()
        t.string('posisi').notNullable()
        // t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        t.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posisi_keluarga')
};
