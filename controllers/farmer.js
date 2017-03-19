// Load Module Dependencies
var moment = require('moment');
var event  = require('events');
var debug  = require('debug')('geberew-api');

var FarmerDal = require('../dal/farmer');


exports.noop = function noop(req, res, next) {
  res.json({
    error:false,
    msg: 'To Implemented!',
    status:200
  });
};
/**
 * @desc Validate Farmers id exist or not
 * @param {req} HTTP Request
 * @param {res} HTTP Response
 * @param {id} id Farmers id from url
 */
exports.validateFarmer = function validateFarmer(req, res, next, id) {
  //Validate the id is mongoid or not
  req.checkParams('id', 'Invalid ID').isMongoId(id);
  var validationErrors = req.validationErrors();

  if (validationErrors) {

    res.status(400).json({
      error: true,
      msg: req.validationErrors(),
      status: 400
    });

  } else {
    FarmerDal.get({ _id: id }, function (err, farmer) {
      if (farmer._id) {
        req.farmer_id = farmer._id;
        req.doc=farmer;
        next();
      } else {
        res.status(404)
          .json({
            error: true, status: 404,
            msg: 'farmer _id ' + id + ' not found'
          });
      }
    });
  }
};

exports.createFarmer = function createFarmer(req, res, next){
    debug('validate farmer data');
var body = req.body;
var workflow = new event.EventEmitter();

workflow.on('validateInput', function validateInput() {
    req.checkBody('location.lati', 'invalid latitude').notEmpty().withMessage('Latitude Should not be empty');
    req.checkBody('location.long', 'invalid longititude').notEmpty().withMessage('Longititude Should not be empty');
    req.checkBody('first_name', 'invalid first name').notEmpty().withMessage('first name should not be empty');
    req.checkBody('middle_name', 'invalid middle name').notEmpty().withMessage('middle name should not be empty');
    req.checkBody('mobile', 'invalid mobile').notEmpty().withMessage('mobile should not be empty');

    if (req.validationErrors()) {
        res.status(400);
        res.json({ error: true, msg: req.validationErrors(), status: 400 })
        return;
    } else {
        workflow.emit('registerFarmer');
    }
});

workflow.on('registerFarmer', function registerfarm() {
    debug('Register farm ')
  
    FarmerDal.create(body, function createfarm(err, farmer) {
        if (err) {
            return next(err);
        }
        res.json(farmer);
      
    });
});

workflow.emit('validateInput');

};
exports.updatefarmer = function updatefarmer(req, res, next) {
    var body= req.body;
    FarmerDal.update({ _id:req.farm_id }, body, function updatefarmer(err, farmer) {
        if (err) {
            return next(err);
        }
        res.json(farmer);
    });
};

exports.getfarmer = function getfarmer(req, res, next){
res.json(req.doc);
};
exports.getfarmers = function getfarmers(req, res, next) {
    FarmerDal.get({}, function getfarmers(err, farmers) {
        if (err) {
            return next(err);
        }
        res.json(farmers);
    });
};