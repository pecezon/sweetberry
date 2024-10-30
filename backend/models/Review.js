const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    author:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    review:{
        type: String,
        required: true,
    },
    authorImagePath:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
    },
})

module.exports = mongoose.model('Review', reviewSchema);