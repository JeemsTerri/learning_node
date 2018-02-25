"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ibadah_fresh', function (t) {
        t.increments('id').primary()
        t.integer('fresh_id').unsigned().notNullable().references('id').inTable('fresh')
        t.string('alamat')
        t.date('tanggal')
        t.time('jam')
        t.string('tema')
        t.string('pengkhotbah')
        t.string('description')
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ibadah_fresh')
};
