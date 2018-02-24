const knex = require('../../bookshelf').knex;
const bookshelf = require('../../bookshelf');

require('./Role');

var User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    role: function() {
        return this.belongsTo('Role');
    },
}, {
    withRole: function(role_id) {
        return this.forge().query({where: {role_id: role_id}}).fetchAll();
    } 
});

module.exports = bookshelf.model('User', User);