var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({dest: '../uploads'})

const knex = require('knex')(require('../knexfile'))

const _isAuth = require('../helpers/ensureAuth');

router.get('/', _isAuth, function(req, res, next) {
    knex.select().table('appconfig').first().then(function(gereja) {
        res.render('setting/index', { title: 'Setting' , gereja});
    })
});

router.get('/edit', _isAuth, function(req, res, next) {
    
    knex.select().table('appconfig').first().then(function(gereja) {
        res.render('setting/edit', { title: 'Edit Data Gereja', gereja});
    })
    
});

router.post('/edit', _isAuth, upload.single('logo') ,function(req, res, next) {
    var nama_gereja = req.body.nama_gereja;
    var alamat_gereja = req.body.alamat_gereja ;
    var kota = req.body.kota;
    var provinsi = req.body.provinsi;
    var pimpinan = req.body.pimpinan;

    if(req.file && file.req.filename != 'noimage') {
        console.log("Uploading File ...")
        var logo = req.file.filename
    } else {
        console.log("No File Uploaded ...")
        var logo = 'noimage'
    }

    // Form Validator
    req.checkBody('nama_gereja', 'Nama Gereja field is required').notEmpty();
    req.checkBody('alamat_gereja','Alamat Gereja field is required').notEmpty();
    req.checkBody('kota','Kota is not valid').notEmpty();
    req.checkBody('provinsi','Provinsi field is required').notEmpty();
    req.checkBody('pimpinan','Pimpinan field is required').notEmpty();

    // Check Errors
    var errors = req.validationErrors();

    if(errors){
        res.render('users/register', {
            errors: errors
        });
    } else {
        knex('appconfig').where('nama_gereja', '=', nama_gereja).update({
            nama_gereja: nama_gereja,
            alamat_gereja: alamat_gereja,
            kota: kota,
            provinsi: provinsi,
            pimpinan: pimpinan,
            logo: logo
        }).then(function(){
            req.flash('success', 'Your data has been successfully edited')
            res.redirect('/setting');
        })
    }

})

module.exports = router;
