const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    
    images: [{
        type: String,
        required: false
    }],
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('News', schema);