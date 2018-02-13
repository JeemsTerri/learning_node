
exports.up = function(knex, Promise) {
    return knex.schema.createTable('jemaat', function (t) {
        t.increments('_id').primary()
        t.string('firstname').notNullable()
        t.string('lastname').notNullable()
        t.date('dob').notNullable()
        t.string('pob').notNullable()
        t.string('address').notNullable()
        t.string('gender').notNullable()
        t.string('phone').unique()
        t.integer('user_id').unsigned().references('_id').inTable('users')
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('jemaat')
};
