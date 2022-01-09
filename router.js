// filename: router.js

// initialize express router
var router = require('express').Router();

// import our controller
var controller = require('./caseController');

// handle post request
router.post('/search', controller.search);

// export API routes
module.exports = router;
