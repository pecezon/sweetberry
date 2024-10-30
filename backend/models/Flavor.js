const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flavorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
})

module.exports = mongoose.model('Flavor', flavorSchema);
