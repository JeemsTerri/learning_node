"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('absensi_ibadah_fresh', function (t) {
        t.integer('ibadah_fresh_id').unsigned().notNullable().references('id').inTable('ibadah_fresh')
        t.integer('jemaat_id').unsigned().notNullable().references('id').inTable('jemaat')
        t.string('status').notNullable()
        t.string('alasan')
        t.string('description')
        // t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        t.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('absensi_ibadah_fresh')
};
