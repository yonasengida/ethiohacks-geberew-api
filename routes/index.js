// Load Module Dependencies
var express = require('express');

var landRouter    = require('./land');
var farmerRouter = require('./farmer');

// Export Router Initializater
module.exports = function initRouter(app) {

  // Users Endpoint
  app.use('/lands', landRouter);
  // Profile Endpoint
 app.use('/farmers', farmerRouter);
   
};
