const knex = require('../../bookshelf').knex;
const bookshelf = require('../../bookshelf');

require('./Fresh');

var Jemaat = bookshelf.Model.extend({
    tableName: 'jemaat',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    fresh: function() {
        return this.belongsTo('Fresh');
    }
});

module.exports = bookshelf.model('Jemaat', Jemaat);