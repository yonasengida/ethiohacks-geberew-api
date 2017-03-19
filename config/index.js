'use strict';
// Load Module Dependencies
const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-hidden')({
  defaultHidden: { _id: false, password: true, '_v': true }
}));

var HTTP_PORT  = process.env.HTTP_PORT || 8900;

module.exports = {
  // HTTP PORT
  HTTP_PORT: HTTP_PORT,

  // MONGODB URL
  MONGODB_URL: 'mongodb://localhost/geberew',
    
  // SALT VALUE LENGTH
  SALT_LENGTH :11,
  
 TOKEN_LENGTH: 7

};
