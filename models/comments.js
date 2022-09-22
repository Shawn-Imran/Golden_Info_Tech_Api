const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    depertment: {
        type: String,
        required: true
    },
    
    images: [{
        type: String,
        required: false
    }],
    Comment: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('Comments', schema);