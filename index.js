var express = require('express') // Node framework
var app = express()

var fs = require('fs') // Filereader

/* File to read initial resources
/*__dirname C:\Users\juckiz\projects\node-rest-api */
var resource_file_path = __dirname.concat('\\resources\\items.json');

/* Base resources path */
var resource_base_path = '/resources';

/* TODO Separate routes to own file */

/*
Rerturn list of resources read from a file
*/
app.get(resource_base_path, function(req, res) {
    fs.readFile(resource_file_path, 'utf8', function(err, content) {
        if(err) {
           return res.status(404).send({ error: 'file not found' });
        }
        console.log(content);
        return res.send(content); // send doesn't add line breaks and defaults to json
    });

    console.log('after calling readFile');
});

app.get(resource_base_path.concat('/car'), function(req, res) {
    return res.json({type: "car", name: "mese", sound: "vroom"});
});

app.get(resource_base_path.concat('/bike'), function(req, res) {
    return res.json({type: "bike", name: "ktm", sound: "rallatus"});
});

app.get(resource_base_path.concat('/dog'), function(req, res) {
    return res.json({type: "dog", name: "musti", sound: "bark"});
});

var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
