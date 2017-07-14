// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var busboy = require('connect-busboy');
app.use(busboy());
const stream = require('stream');
const http = require('http');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public')); 

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post("/fileupload", function (request, response) {
  
  request.pipe(request.busboy);
  var result = "";
  if(request.busboy){
    console.log("here0");
    request.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log("here");
      file.on('data', function(data) {
        //console.log('File [' + filename + '] got ' + data.length + ' bytes');
        result = 'File [' + filename + '] got ' + data.length + ' bytes';
        //console.log(typeof result);
        response.send(result);
      });
    });
    
    
  }else{
    response.send("err");
  }
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
