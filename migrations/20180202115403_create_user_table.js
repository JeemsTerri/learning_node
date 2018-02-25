"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email').notNullable()
        t.string('reset_password')
        t.integer('role_id').unsigned().notNullable().references('id').inTable('roles')
        // t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        t.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
