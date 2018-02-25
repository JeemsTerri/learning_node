"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email').notNullable().unique()
        t.string('reset_password')
        t.integer('role_id').unsigned().notNullable().references('id').inTable('roles')
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
