const knex = require('../../bookshelf').knex;
const bookshelf = require('../../bookshelf');

require('./Fresh');
// require('./Jemaat');

var Ibadah = bookshelf.Model.extend({
    tableName: 'ibadah_fresh',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    fresh: function(){
        return this.belongsTo('Fresh')
    },
    // jemaat: function(){
    //     return this.hasMany('Jemaat').through('Fresh')
    // }
});

module.exports = bookshelf.model('Ibadah', Ibadah);