const knex = require('../../bookshelf').knex;
const bookshelf = require('../../bookshelf');

require('./User');

var Role = bookshelf.Model.extend({
    tableName: 'roles',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    user: function() {
        return this.hasOne('User');
    },
    users: function() {
        return this.hasMany('User');
    }
}, {
    usersWithRole: function(role_id) {
        return this.forge().query({where: {role_id: role_id}}).fetchAll();
    } 
});

module.exports = bookshelf.model('Role', Role);