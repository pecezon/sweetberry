const express = require('express');
const router = express.Router();

//import controllers
const {getDefault} = require('../controllers/default');

//import middlewares

//api routes
router.get('/', getDefault);

module.exports = router;