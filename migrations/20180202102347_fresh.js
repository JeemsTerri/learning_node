"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fresh', function (t) {
        t.increments('id').primary()
        t.string('nama').notNullable().unique()
        t.string('pimpinan')
        t.string('wilayah')
        t.text('description')
        t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        // t.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('fresh')
};
