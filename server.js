var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World ! /no props');
});

app.listen(80);
