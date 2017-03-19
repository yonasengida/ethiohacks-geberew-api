/**
 * Load Module Dependencies.
 */
var objPath    = require('get-object-path');
var buildPaths = require('build-object-paths');
var _          = require('lodash');

/**
 * Construct query from an object
 *
 * @param {Object} obj Object to construct query from
 *
 * @return {Object} constructed query
 */
module.exports = function buildQuery(obj){
  var paths = buildPaths(obj);
  var query = {};
  var uniqQuery = {};

  paths.forEach(function iterate(path){
    query[path] = objPath(obj, path);
  });

  for(var prop in query){
    if(!_.isPlainObject(query[prop])) {
      uniqQuery[prop] = query[prop];
    }
  }


  return uniqQuery;
};
