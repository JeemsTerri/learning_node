var express = require('express');
var router = express.Router();
var moment = require('moment')

const _isAuth = require('../helpers/ensureAuth');
const knex = require('knex')(require('../knexfile'))
var IbadahModel = require('../models/bookshelf/Ibadah');
var FreshModel = require('../models/bookshelf/Fresh');

/* GET home page. */
router.get('/', function(req, res, next) {
    new IbadahModel({}).fetchAll({withRelated: 'fresh'}).then(function(raw) {
        var dataIbadah = raw.toJSON()
        res.render('ibadah_fresh/index', { title: 'Ibadah', dataIbadah });
    })

});

router.get('/create', function(req, res, next) {
    new FreshModel({}).fetchAll().then(function(raw) {
        var dataFresh = raw.toJSON();
        res.render('ibadah_fresh/create', { title: 'Create' , dataFresh});
    })

});

router.post('/create', function(req, res, next) {
    var fresh_id = req.body.fresh
    var alamat = req.body.alamat
    var tanggal = moment(req.body.tanggal).format('YYYY-MM-DD')
    var jam = moment(tanggal +' '+ req.body.jam).format('HH:mm:ss')
    var tema = req.body.tema
    var pengkhotbah = req.body.pengkhotbah
    var description = req.body.description

    new IbadahModel({
        fresh_id,
        alamat,
        tanggal,
        jam,
        tema,
        pengkhotbah,
        description
    }).save().then(function(saved) {
        console.log('success')
        req.flash('success', 'The data has been saved')
    
        res.redirect('/ibadah')
    }).catch(function(err) {
        console.error(err);
        req.flash('error', err)
        res.redirect('/ibadah/create')
    });
})

router.get('/edit/:id', function(req, res, next) {
    new FreshModel({}).fetchAll().then(function(fresh){
        var dataFresh = fresh.toJSON()        
        // freshsCol = rows.toJSON();
        return new IbadahModel({id: req.params.id}).fetch({withRelated : ['fresh']}).then(function(raw) {
                // var freshs = getFreshs()
                var ibadah = raw.toJSON()
                res.render('ibadah_fresh/edit', { title: 'Express', ibadah, dataFresh});
            })
    })
});

router.post('/edit/:id', function(req, res, next) {

    var fresh_id = req.body.fresh
    var alamat = req.body.alamat
    var tanggal = moment(req.body.tanggal).format('YYYY-MM-DD')
    var jam = moment(tanggal +' '+ req.body.jam).format('HH:mm:ss')
    var tema = req.body.tema
    var pengkhotbah = req.body.pengkhotbah
    var description = req.body.description

    // console.log(jam)

    new IbadahModel({id: req.params.id}).save({
        fresh_id,
        alamat,
        tanggal,
        jam,
        tema,
        pengkhotbah,
        description,
    }, {patch: true, require:true}).then(function(update){
        console.log('success')
        req.flash('success', 'The data has been saved')
    
        res.redirect('/ibadah')
    }).catch(function(err) {
        console.error(err)
        req.flash('error', err)
        res.redirect('/ibadah/edit/'+req.params.id)
    });
});

router.get('/remove', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/delete', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
