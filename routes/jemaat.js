var express = require('express');
var router = express.Router();
var moment = require('moment');

const knex = require('knex')(require('../knexfile'))

const _isAuth = require('../helpers/ensureAuth');

var FreshModel = require('../models/bookshelf/Fresh');
var JemaatModel = require('../models/bookshelf/Jemaat');

/* GET home page. */
router.get('/', function(req, res, next) {

    JemaatModel.forge().fetchAll({withRelated : ['fresh']}).then(function(jemaat) {
        // console.log(JSON.stringify(jemaat));
        var data = jemaat.toJSON()
        res.render('jemaat/index', { title: 'Jemaat' , jemaat:data});
    })
});

router.get('/create', _isAuth, function(req, res, next) {
        
    FreshModel.query('orderBy', 'nama', 'asc').fetchAll().then(function(fresh) {
        // console.log(JSON.stringify(fresh));
        var data = fresh.toJSON()
        res.render('jemaat/create', { title: 'Create | Jemaat', fresh:data});
    }).catch(function(err) {
        console.error(err);
    });
    
});

router.post('/create', _isAuth, function(req, res, next) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname ;
    var dob = moment(req.body.tahun + '-' + req.body.bulan + '-' +req.body.tanggal).format('YYYY-MM-DD HH:mm:ss');
    var pob = req.body.pob;
    var gender = req.body.gender;
    var address = req.body.address;
    var rt = req.body.rt;
    var rw = req.body.rw;
    var city = req.body.city;
    var provinsi = req.body.provinsi;
    var kodepos = req.body.kodepos;
    var phone = req.body.phone;
    var gol_darah = req.body.gol_darah;
    var pelayanan = req.body.pelayanan;
    var fresh_id = req.body.fresh;

    new JemaatModel({
        firstname,
        lastname,
        dob,
        pob,
        gender,
        address,
        rt,
        rw,
        city,
        provinsi,
        kodepos,
        phone,
        gol_darah,
        pelayanan,
        fresh_id
    }).save().then(function(saved) {
        console.log('success')
        req.flash('success', 'The data has been saved')
    
        res.redirect('/jemaat')
    }).catch(function(err) {
        console.error(err);
        req.flash('error', err)
        res.redirect('/jemaat/user')
    });


});

router.get('/edit/:id', function(req, res, next) {

    new FreshModel({}).fetchAll().then(function(fresh){
        var datafresh = fresh.toJSON()        
        // freshsCol = rows.toJSON();
        return new JemaatModel({id: req.params.id}).fetch({withRelated : ['fresh']}).then(function(jemaat) {
                // var freshs = getFreshs()
                var data = jemaat.toJSON()
                // return data
                console.log(JSON.stringify(data))
                // console.log(JSON.stringify(data)+ '\n' + JSON.stringify(fresh))
                res.render('jemaat/edit', { title: 'Express', jemaat: data, fresh:datafresh});
                // console.log(JSON.stringify(fresh));
            })
    })
    
});

router.post('/edit/:id', function(req, res, next) {

    var id = req.params.id
    
    var jemaatUpd = {
        firstname : req.body.firstname,
        lastname : req.body.lastname ,
        dob : req.body.tahun + '-' + req.body.bulan + '-' + req.body.tanggal,
        pob : req.body.pob,
        gender : req.body.gender,
        address : req.body.address,
        rt : req.body.rt,
        rw : req.body.rw,
        city : req.body.city,
        provinsi : req.body.provinsi,
        kodepos : req.body.kodepos,
        phone: req.body.phone,
        gol_darah : req.body.gol_darah,
        pelayanan : req.body.pelayanan,
        fresh_id :req.body.fresh
    }

    // var json = jemaatUpd.toJSON();

    // var firstname = req.body.firstname;
    // var lastname = req.body.lastname ;
    // var dob = moment(req.body.tahun + '-' + req.body.bulan + '-' +req.body.tanggal).format('YYYY-MM-DD HH:mm:ss');
    // var pob = req.body.pob;
    // var gender = req.body.gender;
    // var address = req.body.address;
    // var rt = req.body.rt;
    // var rw = req.body.rw;
    // var city = req.body.city;
    // var provinsi = req.body.provinsi;
    // var kodepos = req.body.kodepos;
    // var phone = req.body.phone;
    // var gol_darah = req.body.gol_darah;
    // var pelayanan = req.body.pelayanan;
    // var fresh_id = req.body.fresh;

    // console.log(moment(req.body.tahun + '-' + req.body.bulan + '-' +req.body.tanggal).format('YYYY-MM-DD'))

    new JemaatModel({id: id}).save({
        firstname : req.body.firstname,
        lastname : req.body.lastname ,
        dob : moment(req.body.tahun + '-' + req.body.bulan + '-' +req.body.tanggal).format('YYYY-MM-DD'),
        pob : req.body.pob,
        gender : req.body.gender,
        address : req.body.address,
        rt : req.body.rt,
        rw : req.body.rw,
        city : req.body.city,
        provinsi : req.body.provinsi,
        kodepos : req.body.kodepos,
        phone: req.body.phone,
        gol_darah : req.body.gol_darah,
        pelayanan : req.body.pelayanan,
        fresh_id : req.body.fresh
    }, {patch: true, require:true})
    .then(function(rows) {
        console.log('success')
        req.flash('success', 'The data has been saved')
    
        res.redirect('/jemaat')
    }).catch(function(err) {
        console.error(err)
        req.flash('error', err)
        res.redirect('/jemaat/edit/'+req.params.id)
    });

});

router.get('/remove', _isAuth, function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/delete', _isAuth, function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
