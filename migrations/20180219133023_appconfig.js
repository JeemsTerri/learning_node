"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('appconfig', function (t) {
        t.increments('id').primary()
        t.string('nama_gereja', 80).notNullable()
        t.string('alamat_gereja').notNullable()
        t.string('kota').notNullable()
        t.string('provinsi').notNullable()
        t.string('pimpinan').notNullable()
        t.string('logo').notNullable().default('noimage.svg')
        // t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        t.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('appconfig')
};
