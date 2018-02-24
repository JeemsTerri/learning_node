var UserModel = require('../models/bookshelf/User');
var FreshModel = require('../models/bookshelf/Fresh');
var JemaatModel = require('../models/bookshelf/Jemaat');
var RoleModel = require('../models/bookshelf/Role');

// UserModel.where({id: 3}).fetch({withRelated: ['role']})
// .then(function(user) {
//     console.log(JSON.stringify(user));
// });

console.log('================================================================ \n')

new FreshModel({}).fetchAll({withRelated: ['jemaats'], require: true, debug:true}).then(function(rows){
    var jemaats = rows.toJSON()

    console.log(JSON.stringify(jemaats+ '\n'))
}).catch(function(err) {
    console.error(err);
});

// FreshModel.collection()
// .fetch({withRelated: [
//     'jemaats',
//     // {jemaats: function(qb) { qb.count('id')}}
// ],  require: true, debug:true}).then(function(rows) {
//     // var collection = rows.toJSON()
//     console.log(JSON.stringify(rows))
// }).catch(function(err) {
//     console.error(err);
// });



// new FreshModel({id:2}).fetchAll({withRelated: ['jemaat'], require: true}).then(function(rows){
//     var freshs = rows.toJSON()

//     console.log(JSON.stringify(freshs))
// }).catch(function(err) {
//         console.error(err);
//     });


// let freshsCol

// new FreshModel({}).fetchAll().then(function(rows){
//     // freshsCol = rows.toJSON();
//     return new JemaatModel({id: 1}).fetch({withRelated : ['fresh'], debug: true}).then(function(jemaat) {
//             // var freshs = getFreshs()
            
//             var data = jemaat.toJSON()
//             // return data
//             console.log(JSON.stringify(data)+ '\n' + JSON.stringify(rows))
//             // res.render('jemaat/edit', { title: 'Express', jemaat: data, freshsCol});
//             // console.log(JSON.stringify(fresh));
//         })
// })


// // Get all Users
// UserModel.fetchAll().then(function(users) {
//     console.log('User Data')
//     console.log(JSON.stringify(users) + '\n');
// });

// // Get all Roles
// RoleModel.fetchAll().then(function(Roles) {
//     console.log('Role Data')
//     console.log(JSON.stringify(Roles) + '\n');
// });


// // UserModel.withRole(3).then(function(users) {
// //     console.log('User with role 1')
// //     console.log(JSON.stringify(users) + '\n');
// // });

// Get all users with their role details
// UserModel.forge().fetchAll({withRelated : ['role']}).then(function(row){
//     console.log('Get all users with their role details \n')
//     console.log(JSON.stringify(row) + '\n');
// }).catch(function(err) {
//     console.error(err);
// });

// // Get specific user with id = 3 & it's role details
// UserModel.where({id: 3}).fetchAll({withRelated: ['role'], require: true})
// .then(function(users){
//     console.log("Get user with id = 3 & it's role details.")
//     console.log(JSON.stringify(users) + '\n');
// }).catch(function(err) {
//     console.error(err);
// });

// // Get users with role_id = 3
// RoleModel.where({id: 3}).fetch({withRelated: ['users']}).then(function(row) {
//     console.log('Get users with role_id = 3')
//     console.log(JSON.stringify(row));
// }).catch(function(err) {
//     console.error(err);
// });

// Updating
// new JemaatModel({id: 4}).save({
//     pelayanan: "test update",
// }, {patch: true, require:true})
// .then(function(rows) {
//     console.log('success')
//     // req.flash('success', 'The data has been saved')

//     // res.redirect('/jemaat')
// }).catch(function(err) {
//     console.error(err);
//     // req.flash('error', err)
//     // res.redirect('/jemaat/edit/'+req.params.id)
// });