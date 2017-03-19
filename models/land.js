//'use strict';
// Farmer Model Definiton.

/**
 * Load Module Dependencies.
 */
const mongoose  = require('mongoose');
const moment    = require('moment');

var Schema = mongoose.Schema;

// New Farmer Schema Instance
var LandSchema = new Schema({
    location: {
        lati: { type: String },
        long: { type: String }

    },
    soil_type: { type: String },
    soil_fertility: {
                    macro: {
                        nitrogen:{type:String},
                        phosphorus:{type:String},
                        potassium:{type:String},
                        sulfur:{type:String},
                        calcium:{type:String},
                        magnesium:{type:String}
                    },
                    micro: {
                        iron :{type:String},
                        manganese :{type:String},
                        copper :{type:String},
                        boron :{type:String},
                        molybdenum :{type:String},
                        chlorine :{type:String}
                    }
    },
    area: { type: String },
    humidity: { type: String },
    temp:{type:String},
    farmer:{type: Schema.Types.ObjectId, ref: 'Farmer'},
});
// Expose Land model
module.exports = mongoose.model('Land', LandSchema);
