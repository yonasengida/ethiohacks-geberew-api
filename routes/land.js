// Load Module Dependencies
var express   =   require('express');

var land  = require('../controllers/land');

// Create a Router
var router = express.Router();

/**
 * @apiDescription This Endpoint allow to Create Land information
 * @api {post} /lands  Create Land Information
 * @apiName CreateLand
 * @apiGroup Land
 *
 * @apiParam {Object} location Location of  landname
 * @apiParam {String} location.lati Latitude
 * @apiParam {String} location.long Longitude
 * @apiParam {Object} soil_fertility Land Soil Fertility
 * @apiParam {String} soil_fertility.macro Macronutrients of Soil Fertility

 * @apiParam {Number} soil_fertility.macro.nitrogen Nitrogen amount
 * @apiParam {Number} soil_fertility.macro.phosphorus Phosphorus amount
 * @apiParam {Number} soil_fertility.macro.potassium Potassium amount
 * @apiParam {Number} soil_fertility.macro.sulfur Sulfur amount
 * @apiParam {Number} soil_fertility.macro.calcium Calcium amount
 * @apiParam {Number} soil_fertility.macro.magnesium Magnesium amount

 * @apiParam {String} soil_fertility.micro Mironutrients of Soil Fertility
 * @apiParam {Number} soil_fertility.micro.iron Iron amount
 * @apiParam {Number} soil_fertility.micro.manganese Manganese amount
 * @apiParam {Number} soil_fertility.micro.copper Copper amount
 * @apiParam {Number} soil_fertility.micro.boron  Boron amount
 * @apiParam {Number} soil_fertility.micro.molybdenum Molybdenum amount
 * @apiParam {Number} soil_fertility.micro.chlorine Chlorine amount

 * @apiParamExample Request Exmaple
{
  "location":{
        "lati": "8.9880E",
        "long":"38.7893N"

    },
    "soil_type": "Clay",
    "soil_fertility": {
                    "macro": {
                        "nitrogen":1.4,
                        "phosphorus":3.1,
                        "potassium":2.5,
                        "sulfur":5.0,
                        "calcium":1.8,
                        "magnesium":1.1
                    },
                    "micro":{
                        "iron":1.1,
                        "manganese":1.7,
                        "copper" :1.9,
                        "boron" :1.3,
                        "molybdenum" :3.1,
                        "chlorine" :1.01
                    }
    },
    "area": 400,
    "humidity":40,
    "temp":13,
    "farmer":1	
}

 *  * @apiSuccessExample {json} Success-Response:
{
  "location": {
    "lati": "6.9880E",
    "long": "38.7893N"
  },
  "soil_type": "Sandy",
  "soil_fertility": {
    "macro": {
      "nitrogen": "1.4",
      "phosphorus": "3.1",
      "potassium": "2.5",
      "sulfur": "5",
      "calcium": "1.8",
      "magnesium": "1.1"
    },
    "micro": {
      "iron": "1.1",
      "manganese": "1.7",
      "copper": "1.9",
      "boron": "1.3",
      "molybdenum": "3.1",
      "chlorine": "1.01"
    }
  },
  "area": "400",
  "humidity": "40",
  "temp": "13",
  "farmer": {
    "first_name": "hailu",
    "middle_name": "demelash",
    "mobile": "+251940898700",
    "location": {
      "lati": "5.89876N",
      "long": "93.89876E"
    },
    "land": {
      "0": "58ce61010b7dc92c85cea3a0"
    },
    "_id": "58ce5f9c0b7dc92c85cea39e"
  },
  "_id": "58ce61010b7dc92c85cea3a0"
}
     
 */
router.post('/', land.createLand);

/**
 * @apiDescription This Endpoint  is allow to get Lands Collections
 * @api {get} /lands Get lands Collections
 * @apiName Get All Lands
 * @apiGroup Land
 *
 *  @apiSuccessExample {json} Success-Response:
  *HTTP/1.1 200 OK
  {
  "location": {
    "lati": "6.9880E",
    "long": "38.7893N"
  },
  "soil_type": "Sandy",
  "soil_fertility": {
    "macro": {
      "nitrogen": "1.4",
      "phosphorus": "3.1",
      "potassium": "2.5",
      "sulfur": "5",
      "calcium": "1.8",
      "magnesium": "1.1"
    },
    "micro": {
      "iron": "1.1",
      "manganese": "1.7",
      "copper": "1.9",
      "boron": "1.3",
      "molybdenum": "3.1",
      "chlorine": "1.01"
    }
  },
  "area": "400",
  "humidity": "40",
  "temp": "13",
  "farmer": {
    "first_name": "hailu",
    "middle_name": "demelash",
    "mobile": "+251940898700",
    "location": {
      "lati": "5.89876N",
      "long": "93.89876E"
    },
    "land": {
      "0": "58ce61010b7dc92c85cea3a0"
    },
    "_id": "58ce5f9c0b7dc92c85cea39e"
  },
  "_id": "58ce61010b7dc92c85cea3a0"
}
 */
router.get('/' ,land.getLands);


/**@apiDescription Get Specific land Collection. To get Sepecific land information pass id  as parameter.
 * @api {get} /lands/:id Request Specific land information
 * @apiName Getland
 * @apiGroup Land
 *
 * @apiParam {string} id land ID.
 * 
 * @apiSuccessExample {json} Success-Response:
 *HTTP/1.1 200 OK
      {
  "location": {
    "lati": "6.9880E",
    "long": "38.7893N"
  },
  "soil_type": "Sandy",
  "soil_fertility": {
    "macro": {
      "nitrogen": "1.4",
      "phosphorus": "3.1",
      "potassium": "2.5",
      "sulfur": "5",
      "calcium": "1.8",
      "magnesium": "1.1"
    },
    "micro": {
      "iron": "1.1",
      "manganese": "1.7",
      "copper": "1.9",
      "boron": "1.3",
      "molybdenum": "3.1",
      "chlorine": "1.01"
    }
  },
  "area": "400",
  "humidity": "40",
  "temp": "13",
  "farmer": {
    "first_name": "hailu",
    "middle_name": "demelash",
    "mobile": "+251940898700",
    "location": {
      "lati": "5.89876N",
      "long": "93.89876E"
    },
    "land": {
      "0": "58ce61010b7dc92c85cea3a0"
    },
    "_id": "58ce5f9c0b7dc92c85cea39e"
  },
  "_id": "58ce61010b7dc92c85cea3a0"
}
 */

router.param('id',land.validateLand);

router.get('/:id', land.getLand);

/**
 * @api {put} /lands/:id Update Specific land information
 * @apiName Updateland
 * @apiGroup Land
 *
 * @apiParam {Object} Data Update Data
 * @apiParamExample Request Exmaple
 *   {
 *   "location": {
            "lati": "8.9880E",
            "long": "38.7893N"
        },
        "soil_type": "Clay",
        "soil_fertility": {
            "macro": {
            "nitrogen": "1.4",
            }
        }
 *   }
 * @apiSuccessExample {json} Success-Response:
 *HTTP/1.1 200 OK
       {
  "location": {
    "lati": "6.9880E",
    "long": "38.7893N"
  },
  "soil_type": "Sandy",
  "soil_fertility": {
    "macro": {
      "nitrogen": "1.4",
      "phosphorus": "3.1",
      "potassium": "2.5",
      "sulfur": "5",
      "calcium": "1.8",
      "magnesium": "1.1"
    },
    "micro": {
      "iron": "1.1",
      "manganese": "1.7",
      "copper": "1.9",
      "boron": "1.3",
      "molybdenum": "3.1",
      "chlorine": "1.01"
    }
  },
  "area": "400",
  "humidity": "40",
  "temp": "13",
  "farmer": {
    "first_name": "hailu",
    "middle_name": "demelash",
    "mobile": "+251940898700",
    "location": {
      "lati": "5.89876N",
      "long": "93.89876E"
    },
    "land": {
      "0": "58ce61010b7dc92c85cea3a0"
    },
    "_id": "58ce5f9c0b7dc92c85cea39e"
  },
  "_id": "58ce61010b7dc92c85cea3a0"
}
 */
router.put('/:id', land.updateLand);

/**
 * @apiDescription This End point is allow to delete specific Land Information
 * @api {delete} /lands/:id Delete Specific land information
 * @apiName DeleteLand
 * @apiGroup Land
 *
 * @apiParam {string} id land  ID.
 * 
 * @apiSuccessExample {json} Success-Response:
 *  *HTTP/1.1 200 OK
       {
  "location": {
    "lati": "6.9880E",
    "long": "38.7893N"
  },
  "soil_type": "Sandy",
  "soil_fertility": {
    "macro": {
      "nitrogen": "1.4",
      "phosphorus": "3.1",
      "potassium": "2.5",
      "sulfur": "5",
      "calcium": "1.8",
      "magnesium": "1.1"
    },
    "micro": {
      "iron": "1.1",
      "manganese": "1.7",
      "copper": "1.9",
      "boron": "1.3",
      "molybdenum": "3.1",
      "chlorine": "1.01"
    }
  },
  "area": "400",
  "humidity": "40",
  "temp": "13",
  "farmer": {
    "first_name": "hailu",
    "middle_name": "demelash",
    "mobile": "+251940898700",
    "location": {
      "lati": "5.89876N",
      "long": "93.89876E"
    },
    "land": {
      "0": "58ce61010b7dc92c85cea3a0"
    },
    "_id": "58ce5f9c0b7dc92c85cea39e"
  },
  "_id": "58ce61010b7dc92c85cea3a0"
}
 */
router.delete('/:id', land.noop);

// Export Router
module.exports = router;

