// Access Layer for Farmer Data.

// NOTES:
// .population() specifies the references that you want
// mongodb to fill in with the corresponding document
// instead of returning an id.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-farmer');
var moment  = require('moment');

var Farmer        = require('../models/farmer');

var population = [{ 
     path: 'farmer',
     populate: {
       path: '',
       model: ''
     } 
  }
];

/**
 * create a new farmer.
 *
 * @desc  creates a new farmer and saves them
 *        in the database
 *
 * @param {Object}  FarmerData  Data for the Farmer to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(farmerData, cb) {
  debug('creating a new farmer');

  // Create Farmer
  var FarmerModel  = new Farmer(farmerData);

  FarmerModel.save(function saveFarmer(err, data) {
    if (err) {
      return cb(err);
    }


    exports.get({ _id: data._id }, function (err, farmer) {
      if(err) {
        return cb(err);
      }

      cb(null, farmer);

    });

  });

};

/**
 * delete a farmer
 *
 * @desc  delete data of the farmer with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting farmer: ', query);

  Farmer
    .findOne(query)
    .populate(population)
    .exec(function deleteFarmer(err, farmer) {
      if (err) {
        return cb(err);
      }

      if(!farmer) {
        return cb(null, {});
      }

      Farmer.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, farmer);

      });

    });
};

/**
 * update a farmer
 *
 * @desc  update data of the farmer with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating farmer: ', query);

  var now = moment().toISOString();

  updates.last_modified = now;

  Farmer
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updateFarmer(err, farmer) {
      if(err) {
        return cb(err);
      }

      cb(null, farmer || {});
    });
};

/**
 * get a farmer.
 *
 * @desc get a farmer with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting farmer ', query);

  Farmer
    .findOne(query)
    .populate(population)
    .exec(function(err, farmer) {
      if(err) {
        return cb(err);
      }

      cb(null, farmer || {});
    });
};

/**
 * get a collection of farmers
 *
 * @desc get a collection of farmers from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of farmers');
/**
 * Mongoose 4.5 support this

Project.find(query)
  .populate({ 
     path: 'pages',
     populate: {
       path: 'components',
       model: 'Component'
     } 
  })
  .exec(function(err, docs) {});
 */
 Farmer.find(query)
.populate(population)
    .exec(function getFarmersCollection(err, farmers) {
      if(err) {
        return cb(err);
      }

     return cb(null, farmers);

  });

};

exports.getCollectionBYPagination = function getCollectionBYPagination(query,queryOpts, cb) {

  Farmer.paginate(query, queryOpts, function (err, result) {
    // result.docs
    // result.total
    // result.limit - 10
    // result.page - 3
    // result.pages

    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};
