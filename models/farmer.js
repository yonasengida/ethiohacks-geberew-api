//'use strict';
// Farmer Model Definiton.

/**
 * Load Module Dependencies.
 */
const mongoose  = require('mongoose');
const moment    = require('moment');

var Schema = mongoose.Schema;

// New Farmer Schema Instance
var FarmerSchema = new Schema({
    first_name:  { type: String },
    middle_name: { type: String },
    mobile:   { type: String },
    location: {
        lati: { type: String },
        long: { type: String },
    },
    land:[{type:mongoose.Schema.Types.ObjectId, ref:'Land'}],
});
// Expose Farmer model
module.exports = mongoose.model('Farmer', FarmerSchema);
