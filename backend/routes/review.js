const express = require('express');
const router = express.Router();

//import controllers
const {getReviews, createReview} = require('../controllers/review');

//import middlewares

//api routes
router.get('/reviews', getReviews);
router.post('/review', createReview);

module.exports = router;