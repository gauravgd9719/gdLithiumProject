const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")



//project


router.get("/createBook", BookController.createBook)

router.post("/bookList", BookController.bookbyauthor)

router.post("/getBookInYear", BookController.getBookInYear)

router.post("/getParticularBook", BookController.getParticularBook)

router.post("/getBookByPrice", BookController.BookByPrice)

router.post("/getRandomBooks", BookController.getRandomBooksfunction)

module.exports = router;