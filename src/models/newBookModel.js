const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

// newBook Schema

const newBook = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    ratings: Number,
    publisher: String
},{ timestamps: true })


module.exports = mongoose.model('newBook', newBook)
