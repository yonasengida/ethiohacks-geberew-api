// Load Module Dependencies
var express   =   require('express');

var farmer  = require('../controllers/farmer');

// Create a Router
var router = express.Router();

/**
 * @apiDescription This end point allow to create new Farmer information based on below parameter.
 * @api {post} /farmers  Create Farmer
 * @apiName CreateFarmer
 * @apiGroup Farmer
 *
 *
 * @apiParam {String} first_name Farmer First Name
 * @apiParam {String} middle_name Farmers MIddle Name
 * @apiParam {string} mobile Farmer Mobile NUmber
 * @apiParam {string} location Farmers Location
 * @apiParam {string} location.lati Latitude  of Location
 * @apiParam {string} location.long Longitude of Location  
 * @apiParamExample Request Exmaple
 * {
 *   "first_name":"abebe",
 *   "middle_name":"kebede",
 *   "mobile":"+251930015100",
 *   "location":{
 *             "lati":1,
 *              "long":1 
 *              },
 * }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
        {
        "first_name": "abebe",
        "middle_name": "kebede",
        "mobile": "+251930015100",
        "location": {
            "lati": "1",
            "long": "1"
        },
        "_id": "58cdab596a13435788a9725d"
        }
 */
router.post('/', farmer.createFarmer);

/**
 * @apiDescription This Endpoint is allow to get all farmers Collection.
 * @api {get} /farmers Get Farmers Collection
 * @apiName GetFarmers
 * @apiGroup Farmer
 *
 *  @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
    {
        "first_name": "abebe",
        "middle_name": "kebede",
        "mobile": "+251930015100",
        "location": {
            "lati": "1",
            "long": "1"
        },
        "_id": "58cdab596a13435788a9725d"
     }
 */
router.get('/' ,farmer.getfarmers);
/**
 * @apiDescription Get farmers Collection by Pagination. Use below parameters to query with pagination :- page=<RESULTS_PAGE> and 
 * per_page=<RESULTS_PER_PAGE>.
 * @api {get} /farmers/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Farmers Collection by Pagination
 * @apiName Get farmers Collection
 * @apiGroup Farmer
 * 
 * @apiSuccess {String} first_name Farmer First Name
 * @apiSuccess {String} middle_name Farmers MIddle Name
 * @apiSuccess {string} mobile Farmer Mobile NUmber
 * @apiSuccess {string} location Farmers Location
 * @apiSuccess {string} location.lati Latitude  of Location
 * @apiSuccess {string} location.long Longitude of Location 
 * 
 * @apiSuccessExample {json} Success-Response:
* HTTP/1.1 200 OK
    {
        "first_name": "abebe",
        "middle_name": "kebede",
        "mobile": "+251930015100",
        "location": {
            "lati": "1",
            "long": "1"
        },
        "_id": "58cdab596a13435788a9725d"
     }
 */

 
//router.get('/paginate',farmer.getByPagination)

/**
 * @apiDescription This Endpoint is allow to get specific collection.
 * @api {get} /farmers/:id Get Specific farmer information
 * @apiName GetFarmer
 * @apiGroup Farmer
 *
 * @apiParam {string} id Farmer  ID.
 * 
 * @apiSuccessExample {json} Success-Response:

   HTTP/1.1 200 OK
        {
        "first_name": "abebe",
        "middle_name": "kebede",
        "mobile": "+251930015100",
        "location": {
            "lati": "1",
            "long": "1"
        },
        "_id": "58cdab596a13435788a9725d"
     }
 */

router.param('id',farmer.validateFarmer);

router.get('/:id', farmer.getfarmer);

/**
 * @apiDescription This endpoint is allow to update specific farmer information
 * @api {put} /farmers/:id Update Specific farmer information
 * @apiName UpdateFarmer
 * @apiGroup Farmer
 *
 * @apiParam {Object} Data Update Data
 * @apiParamExample Request Exmaple
 *   {
 *    "firs_tname":"engida",
 *    "middle_name":"yonas"
 *   }
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
    {
        "first_name": "engida",
        "middle_name": "yonas",
        "mobile": "+251930015100",
        "location": {
            "lati": "1",
            "long": "1"
        },
        "_id": "58cdab596a13435788a9725d"
 }
 */
router.put('/:id', farmer.updatefarmer);

/**
 * @apiDescription This Endpoint is allow to delete specific farmer information
 * @api {delete} /farmers/:id Delete Specific farmer information
 * @apiName DeleteFarmer
 * @apiGroup Farmer
 *
 * @apiParam {string}  id Farmers ID.
 * 
 * @apiSuccessExample {json} Success-Response:
  HTTP/1.1 200 OK
        {
        "first_name": "abebe",
        "middle_name": "kebede",
        "mobile": "+251930015100",
        "location": {
            "lati": "1",
            "long": "1"
        },
        "_id": "58cdab596a13435788a9725d"
        }
 */
router.delete('/:id', farmer.noop);

// Export Router
module.exports = router;

