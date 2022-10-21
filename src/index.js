const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://gauravdhiman123:%3ChiFunctionUp%40444%3E@gd-cluster.kufg7lx.mongodb.net/gaurav-dhiman123456"
, {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))




app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

