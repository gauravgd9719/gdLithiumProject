const mongoose = require('mongoose');

//newAuthor Schema

const newAuthor = new mongoose.Schema({
    authorName: String,
    age: Number,
    address: String,
    rating: Number
},{ timestamps: true })

 module.exports = mongoose.model('newAuthor', newAuthor)
