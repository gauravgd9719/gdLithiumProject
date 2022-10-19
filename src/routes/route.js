const express = require('express');

const { application } = require('express');

const router = express.Router();



//(PROBLEM-1) solution of assignment of api-mission 
router.get('/missing-no', function(req,res){
      const num$arr = [1, 2, 3, 5, 6, 7];
    function missingNumber(num$arr){
    let n = num$arr.length;
    let sum = ((n+2) * (n+1)) / 2;
    for (let i = 0; i< n; i++){
        sum = sum - num$arr[i]
    }

    return sum;
    
}
console.log(missingNumber(num$arr))
res.send({data:missingNumber})
})


//(PROBLEM-2)

router.get('/sol2', function(req,rs){
    function missing(input){
        let N = input.length + 1
        let fisrt = input[0]
        let last = input[input.length -1]
        var sum = N * (fisrt + last);
        sum = sum /2;
        var output = 0

        for (let i=0; i<input.length; i++)
        {
            output = output + input[i]
            console.log(sum - output)
        }
    }

    missing ([33, 34, 35, 37, 38, 39])
    res.send({data:missingNumber})
})










//rough work
//const numarray$ = [1, 2, 3, 5, 6, 7]
// const sumOfTheNumarray$ =  n(n+1)/2
// sumOfTheNumarray$ = n(n+1)/2 - missingNumber
// MissingNumber =  n(n+1)/2 - sumOfTheNumarray$
// res.send({data:missingNumber})






   


module.exports = router;
// adding this comment for no reason