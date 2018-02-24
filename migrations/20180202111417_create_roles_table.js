
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function (t) {
        t.increments('id').primary()
        t.string('role_name').notNullable().unique()
        t.string('description')
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
};
