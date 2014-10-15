var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello Something!');
});

app.listen(80);
