// Load Module Dependencies
var moment = require('moment');
var event  = require('events');
var debug  = require('debug')('geberew-api');

var LandDal = require('../dal/land');

exports.noop = function noop(req, res, next) {
  res.json({
    error:false,
    msg: 'To Implemented!',
    status:200
  });
};

exports.validateLand = function validateLand(req, res, next, id) {
  //Validate the id is mongoid or not
  req.checkParams('id', 'Invalid urlparam').isMongoId(id);
  var validationErrors = req.validationErrors();

  if (validationErrors) {

    res.status(404).json({
      error: true,
      msg: "Not Found",
      status: 404
    });

  } else {
    LandDal.get({ _id: id }, function (err, land) {
      if (land._id) {
        req.land_id = land._id;
        req.doc=land;
        next();
      } else {
        res.status(404)
          .json({
            error: true, status: 404,
            msg: 'land _id ' + id + ' not found'
          });
      }
    });
  }
};

exports.createLand = function createLand(req, res, next){
    debug('validate Lan data');
var body = req.body;
var workflow = new event.EventEmitter();

workflow.on('validateInput', function validateInput() {
    req.checkBody('location.lati', 'invalid latitude').notEmpty().withMessage('Latitude Should not be empty');
    req.checkBody('location.long', 'invalid longititude').notEmpty().withMessage('Longititude Should not be empty');

    if (req.validationErrors()) {
        res.status(400);
        res.json({ error: true, msg: req.validationErrors(), status: 400 })
        return;
    } else {
        workflow.emit('registerLand');
    }
});

workflow.on('registerLand', function registerLand() {
    debug('Register Land ')
    console.log(body);
    LandDal.create(body, function createLand(err, land) {
        if (err) {
            return next(err);
        }
        res.json(land);
       console.log(body);
    });
});

workflow.emit('validateInput');

};
exports.updateLand = function updateLand(req, res, next) {
    var body= req.body;
    LandDal.update({ _id:req.land_id }, body, function updateLand(err, land) {
        if (err) {
            return next(err);
        }
        res.json(land);
    });
};

exports.getLand = function getLand(req, res, next){
res.json(req.doc);
};
exports.getLands = function getLands(req, res, next) {
    LandDal.getCollection({}, function getLands(err, lands) {
        if (err) {
            return next(err);
        }
        res.json(lands);
    });
};