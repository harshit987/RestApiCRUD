const express = require('express');
const bodyParser = require('body-parser');
//initialising express app
const app = express();

//parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true}))

//parse request of content-type - applicationCache/JSON
app.use(bodyParser.json())


//
var notes = require('./app/models/note.models.js');

//configuring the database

const dbconfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const restapi = require('./app/routes/note.routes.js');
mongoose.Promise = global.Promise;

//connecting to database
mongoose.connect(dbconfig.url,{useNewUrlParser : true}).then(()=>{
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('could not connect to the database');
    process.exit();
});

//define a simple route

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
});
//listen for requests

app.post('/create',(req,res)=> {
      var body = req.body;
      var title = body.title;
      var content = body.content;
      var note1 = new notes({title : title, content : content})
      
})
app.listen(3000,()=>{
    console.log("server is listening to port: 3000");
});