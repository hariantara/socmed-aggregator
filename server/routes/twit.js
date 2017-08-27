var express = require('express');
var router = express.Router();
var twitController = require('../controller/twitsController')
require('dotenv').config()

/* GET twiiter */
router.get('/:search', twitController.searchTwit )
router.get('/home/:timeline', twitController.homeTimeLine )
router.get('/showdm/:id', twitController.showDm )
router.post('/status', twitController.updateStatuses )
router.post('/dm', twitController.directMessage )

module.exports = router;
