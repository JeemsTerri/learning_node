"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('keluarga_jemaat', function (t) {
        t.integer('keluarga_id').unsigned().notNullable().references('id').inTable('keluarga')
        t.integer('jemaat_id').unsigned().notNullable().references('id').inTable('jemaat')
        t.integer('posisi_keluarga_id').unsigned().notNullable().references('id').inTable('posisi_keluarga')
        t.timestamps(false, true)
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('keluarga_jemaat')
};
