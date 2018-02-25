"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('jemaat', function (t) {
        t.increments('id').primary()
        t.string('firstname').notNullable()
        t.string('lastname').notNullable()
        t.date('dob').notNullable()
        t.string('pob').notNullable()
        t.string('address').notNullable()
        t.string('city').notNullable()
        t.string('provinsi').notNullable()
        t.string('rt').notNullable()
        t.string('rw').notNullable()
        t.string('kodepos').notNullable()
        t.string('gender').notNullable()
        t.string('phone')
        t.string('gol_darah').notNullable()
        t.string('pelayanan')
        t.integer('fresh_id').unsigned().references('id').inTable('fresh')
        t.integer('user_id').unsigned().references('id').inTable('users')
        t.integer('role_id').unsigned().references('id').inTable('roles')
        // t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        t.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('jemaat')
};
