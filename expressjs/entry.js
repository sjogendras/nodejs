var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World...');
});

app.get('/hello', function(req, res){
    //get value from query string, query is a object like {name:""}
    var name = req.query.name;

    if(name)
        res.send('Hello : Mr. ' + name);
    else 
        res.send('Please pass name in the query string like : ?name=Jogendra');
});

app.listen(4545, function(){
    console.log('Server listening on port:4545...');
});