// Access Layer for Land Data.

// NOTES:
// .population() specifies the references that you want
// mongodb to fill in with the corresponding document
// instead of returning an id.

/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-land');
var moment  = require('moment');

var Land        = require('../models/land');

var population = [
  { 
     path: 'farmer'
  }
];

/**
 * create a new Land.
 *
 * @desc  creates a new Land and saves them
 *        in the database
 *
 * @param {Object}  landData  Data for the Land to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(landData, cb) {
  debug('creating a new land');

  // Create Land
  var landModel  = new Land(landData);

  landModel.save(function saveLand(err, data) {
    if (err) {
      return cb(err);
    }


    exports.get({ _id: data._id }, function (err, land) {
      if(err) {
        return cb(err);
      }

      cb(null, land);

    });

  });

};

/**
 * delete a land
 *
 * @desc  delete data of the land with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting land: ', query);

  Land
    .findOne(query)
    .populate(population)
    .exec(function deleteLand(err, land) {
      if (err) {
        return cb(err);
      }

      if(!land) {
        return cb(null, {});
      }

      Land.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, land);

      });

    });
};

/**
 * update a Land
 *
 * @desc  update data of the land with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating Land: ', query);

  var now = moment().toISOString();

  updates.last_modified = now;

  Land
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updateLand(err, Land) {
      if(err) {
        return cb(err);
      }

      cb(null, Land || {});
    });
};

/**
 * get a Land.
 *
 * @desc get a Land with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting Land ', query);
  Land
    .findOne(query)
    .populate(population)
    .exec(function(err, Land) {
      if(err) {
        return cb(err);
      }

      cb(null, Land || {});
    });
};

/**
 * get a collection of Lands
 *
 * @desc get a collection of Lands from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of Lands');
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
 Land.find(query)
.populate(population)
    .exec(function getLandsCollection(err, Lands) {
      if(err) {
        return cb(err);
      }

     return cb(null, Lands);

  });

};

exports.getCollectionBYPagination = function getCollectionBYPagination(query,queryOpts, cb) {

  Land.paginate(query, queryOpts, function (err, result) {
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
