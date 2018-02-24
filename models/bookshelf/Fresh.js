const knex = require('../../bookshelf').knex;
const bookshelf = require('../../bookshelf');

require('./Jemaat');
require('./Ibadah');


var Fresh = bookshelf.Model.extend({
    tableName: 'fresh',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    jemaat: function() {
        return this.hasOne('Jemaat');
    },
    jemaats: function() {
        return this.hasMany('Jemaat');
    },
    ibadah: function(){
        return this.hasOne('Ibadah')
    },
    ibadahs: function(){
        return this.hasMany('Ibadah')
    }
});

module.exports = bookshelf.model('Fresh', Fresh);