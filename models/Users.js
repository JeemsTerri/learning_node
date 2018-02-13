const crypto = require('crypto')
const bookshelf = require('../bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
});

var saltHashPassword = function saltHashPassword ({
    password,
    salt = randomString()
}) {
    const hash = crypto.createHmac('sha512', salt).update(password)
    return {
        salt,
        hash: hash.digest('hex')
    }
}

var randomString = function randomString () {
    return crypto.randomBytes(4).toString('hex')
}

var register = function register ({ name, email, username, password, role }) {
    console.log(`Add user ${username}`)
    const { salt, hash } = saltHashPassword({ password })
    console.log(salt + ' ' + hash)
    new User({
        salt,
        encrypted_password: hash,
        name,
        email,
        username,
        role_id: role
    }).save()
    
    // if using knex
    // knex('users').insert({
    //   salt,
    //   encrypted_password: hash,
    //   name,
    //   email,
    //   username,
    //   role_id: role
    // }).debug();
}

var authenticate = function authenticate ({ username, password }) {
    console.log(`Authenticating user ${username}`)
    return knex('users').where({ username })
    .then(([user]) => {
        if (!user) return { success: false }
        const { hash } = saltHashPassword({
        password,
        salt: user.salt
        })
    return { success: hash === user.encrypted_password }
    })
}

module.exports = {
    User, 
    authenticate, 
    register, 
    saltHashPassword, 
    randomString
};