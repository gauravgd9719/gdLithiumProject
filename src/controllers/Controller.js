const newBookModel = require("../models/newBookModel")

const newAuthorModel = require("../models/newAuthorModel")

const newPublisherModel= require("../models/newPublisherModel")

//function for created  newBook 

const createNewBook = async function(req,res){
    let newBook = req.body
    let created_NewBook = await newBookModel.create(newBook)
    res.send({data: created_NewBook})
}

//function for created newAuthor

const createNewAuthor = async function(req,res){
    let newAuthor = req.body
    let created_NewAuthor = await newAuthorModel.create(newAuthor)
    res.send({data: created_NewAuthor})
}

// function for created newPublisher

const createNewPublisher = async function(req,res){
    let newPublisher = req.body
    let created_NewPublisher = await newPublisherModel.create(newPublisher)
    res.send({data: created_NewPublisher})
}

//function for (findByIdBook) Api
//if author id is not presend then send msg for required

const findByIdBook = async function(req,res){
    const {author_id, newBook}  = req.body
    if(!author_id){
        return res.send("author_id is required")
    }
    let createDataBase = await newBookModel.create(newBook)
    res.send({data: createDataBase})
}

//function for (findPublisherById)
const findPublisherById = async function(req,res){
    const {publisher_id, newPublisher}  = req.body
    if(!publisher_id){
        return res.send("publisher_id is required")
    }
    let createDataBase = await newPublisherModel.create(newPublisher)
    res.send({data: createDataBase})
}

// //fetch all book by use ref and populate
const fetchallBook = async function(req,res){
    const savedData = req.body
    let x = newBookModel.find()
    res.send({data: x})
}

module.exports.createNewBook= createNewBook
module.exports.createNewAuthor= createNewAuthor
module.exports.createNewPublisher= createNewPublisher
module.exports.findByIdBook= findByIdBook
module.exports.findPublisherById = findPublisherById
module.exports.fetchallBook = fetchallBook