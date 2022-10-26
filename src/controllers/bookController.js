const { count } = require("console")
const { stringify } = require("querystring")
const BookModel= require("../models/bookModel")

//

//function for create 11 new entrires==>  (done!)
const createBook = async function(req,res){
    let getData = req.body
    let savedData = await BookModel.create(getData)
    res.send( {msg : savedData})
}

//function for get book by their bookName and authorName ==>
const bookList = async function(req,res){
    let getData = req.body                                 //====> problem 
    let allBooks= await BookModel.find( { $or: [{ bookName: "the wings of fire" } , { tag: {authorName : "apj abdul kalam"}} ] })
    res.send({msg: allBooks})
}

//function for get book by year  (done!)

const getBookInYear = async function(req,res){
    let getData = req.body                                          
    let bookByYear = await BookModel.find({year: 2000}) 
    res.send({msg: bookByYear})
}

//function for get particularBooks(done!)

const getParticularBook = async function(req,res){
    let getData = req.body
    let particularBooks = await BookModel.find( { $and: [ {authorName : "chanakya"  } , {bookName : "ArthSastra"} , { year : 2021} ] } )
    res.send({msg: particularBooks})
}

//function for get book by price 

const getXINRBooks = async function(req,res){
    let getData = req.body                                     //problem????(not working?)
    let getBookByPrice = await BookModel.find( { $or : [ {
        indianPrice : 199} , {indianPrice: 299} ] } )
    res.send({msg: getBookByPrice})
}


// function for get book getRancdomBooks (not working??)

const getRandomBooks = async function(req,res){
    //let getData = req.body                                        //problem?????
    let RandomBooks = await BookModel.find({$or: [{stockAvailable: true}, {totalPages:{$gt: 1000}} ]})
    res.send({msg: RandomBooks})
}

//project

module.exports.createBook = createBook

module.exports.bookbyauthor = bookList

module.exports.getBookInYear = getBookInYear

module.exports.getParticularBook = getParticularBook

module.exports.BookByPrice = getXINRBooks

module.exports.getRandomBooksfunction  = getRandomBooks