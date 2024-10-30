const express = require('express');
const router = express.Router();

//import controllers
const {getFlavors, createFlavor} = require('../controllers/flavor');

//import middlewares

//api routes
router.get('/flavors', getFlavors);
router.post('/flavor', createFlavor);

module.exports = router;