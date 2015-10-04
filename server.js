var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World!/no more props');
});

app.listen(80);
