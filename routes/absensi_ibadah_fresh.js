var express = require('express');
var router = express.Router();

const _isAuth = require('../helpers/ensureAuth');

var FreshModel = require('../models/bookshelf/Fresh')
var IbadahModel = require('../models/bookshelf/Ibadah')
var JemaatModel = require('../models/bookshelf/Jemaat')


router.get('/', function(req, res, next) {
  new FreshModel({}).fetchAll({require: true}).then(function(raw) {
    var freshData = raw.toJSON();
    return new IbadahModel({}).fetchAll({withRelated: ['fresh']}).then(function(raw) {
      var ibadahData = raw.toJSON();
      res.render('absensi_ibadah_fresh/index', { title: 'Absensi Fresh' , 
      freshData, ibadahData});
    })
  })

});

router.get('/:id', function(req, res, next) {
  new IbadahModel({id: req.params.id}).fetch({withRelated: ['fresh']}).then(function(raw) {
    var ibadahData = raw.toJSON()
    console.log(ibadahData.fresh.id)
    return new FreshModel({id: ibadahData.fresh.id}).fetch({withRelated: ['jemaats']}).then(function(raw) {
      var jemaatData = raw.toJSON()
      console.log(JSON.stringify(jemaatData))
      res.render('absensi_ibadah_fresh/absensi', { title: 'Absensi Fresh' , 
      ibadahData, jemaatData});
    })
  })
})

module.exports = router;
