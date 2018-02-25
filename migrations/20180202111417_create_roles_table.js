"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function (t) {
        t.increments('id').primary()
        t.string('role_name').notNullable()
        t.string('description')
        // t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
        // Error
        t.timestamps()
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
};
