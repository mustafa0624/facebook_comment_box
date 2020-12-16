const mongoose = require('mongoose');

const {Schema} = mongoose

const schema = new Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Comment = mongoose.model("comment", schema)