const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

//Problem1: print the movie's array
router.get('/movies',function(req, res){
    const moviearr =["Rang de basanti","The shining", "Lord of the rings", "Batman begins" ]  
    console.log("print movie name==>", moviearr )
    res.send('print')
})

//Problem2: 
   router.get('/movies/:indexNumber', function(req,res){
   const movie$arr = ["Rang de basanti","The shining", "Lord of the rings", "Batman begins" ] 
   const index = req.params.indexNumber
   console.log('print movie name usning index==>',movie$arr)
   
    res.send('movie name by index ' + movie$arr[index])

})

//Problem4:
router.get('/films',function(req,res){
const movie$2arr =   [ {
"id": 1,
"name": "The Shining"
}, {
"id": 2,
"name": "Incendies"
}, {
"id": 3,
"name": "Rang de Basanti"
}, {
"id": 4,
"name": "Finding Nemo"
}]
console.log( 'print array object==>', movie$2arr)
res.send(movie$2arr)
})


//Problem5:
router.get('/film/:filmId', function(req,res){
    const movie$3arr = ["Rang de basanti","The shining", "Lord of the rings", "Batman begins" ] 
    const i = req.params.indexNumber
    console.log('print movie name =>', movie$3arr)
    
    res.send('print responce using index number' +  movie$3arr[i])

})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;