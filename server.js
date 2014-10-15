var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello Elevate!');
});

app.listen(80);
