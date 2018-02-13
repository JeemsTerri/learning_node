
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function (t) {
        t.increments('_id').primary()
        t.string('role_name').notNullable().unique()
        t.string('description')
        t.timestamps(false, true)
      })
    .then(function() {
        return knex.seed.run();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
};
