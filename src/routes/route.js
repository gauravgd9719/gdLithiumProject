const express = require('express');
const router = express.Router();

const controller= require("../controllers/Controller")



//post api for create newBook
router.post("/createNewBook",controller.createNewBook)

// post api for create newAuthor 
router.post("/createNewAuthor", controller.createNewAuthor)

// post api for created newPublisher
router.post("/createNewPublisher",controller.createNewPublisher)

//if author id is not available in req body them send msg
 router.get("/findByIdBook", controller.findByIdBook)

 //if publisher id is not present 
 router.get("/findPublisherById",controller.findPublisherById)

 //fetch all book and author , use with ref and populate 
 router.get("/fetchAllBook",controller.fetchallBook)

module.exports = router;