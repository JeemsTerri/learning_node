var express = require('express');
var router = express.Router();

const _isAuth = require('../helpers/ensureAuth');
const knex = require('knex')(require('../knexfile'))
var FreshModel = require('../models/bookshelf/Fresh');
var JemaatModel = require('../models/bookshelf/Jemaat');

/* GET fresh page. */
router.get('/', function(req, res, next) {
    new FreshModel({}).fetchAll({withRelated: ['jemaats'], require: true, debug:true}).then(function(raw) {
        var freshs = raw.toJSON()
        // console.log(JSON.stringify(freshs))
        res.render('fresh/index', { title: 'Fresh', freshs });
    })
});

router.get('/create', function(req, res, next) {
    res.render('fresh/create', { title: 'Create | Fresh'});
})

router.post('/create', function(req, res, next) {
    var nama = req.body.nama
    var pimpinan = req.body.pimpinan
    var wilayah = req.body.wilayah
    var description = req.body.description

    new FreshModel({
        nama,
        pimpinan,
        description
    }).save().then(function(saved) {
        console.log('success')
        req.flash('success', 'The data has been saved')
    
        res.redirect('/fresh')
    }).catch(function(err) {
        console.error(err);
        req.flash('error', err)
        res.redirect('/fresh/user')
    });
})

router.get('/edit/:id', function(req, res, next) {
    new FreshModel({id: req.params.id}).fetch().then(function(raw) {
        var fresh = raw.toJSON()
        res.render('fresh/edit', { title: 'Fresh', fresh});
    })
})

router.post('/edit/:id', function(req, res, next) {

    // console.log(req.params.id)

    new FreshModel({id: req.params.id}).save({
        nama: req.body.nama,
        pemimpin: req.body.pemimpin,
        // wilayah: req.body.wilayah,
        description: req.body.description
    }, {patch: true, require:true}).then(function(update){
        console.log('success')
        req.flash('success', 'The data has been saved')
    
        res.redirect('/fresh')
    }).catch(function(err) {
        console.error(err)
        req.flash('error', err)
        res.redirect('/fresh/edit/'+req.params.id)
    });
})

module.exports = router;
