var express = require('express');
var path =require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./client")));
app.listen(8000, function(){
  console.log('listening on port 8000');
})
