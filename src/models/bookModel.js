const mongoose = require('mongoose');


//project

const bookCollection = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    prices: {
        
        indianPrice: Number,
        europePrice: Number,
    },
    year: {
        type: Number,
        default: 2021
    },
    tag: {
        authorName: String,
        totalPages: Number,
        stockAvailable: Boolean
    }

})


module.exports = mongoose.model('Book', bookCollection) //books

