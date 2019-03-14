const express = require("express");
const fs = require("fs");
const path = require("path");
let app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


// Public static files
app.use("/public", express.static("public"));

// Data
let rawData = fs.readFileSync('./JSON/data.json');
let data = JSON.parse(rawData);

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
  //res.json(data);
    res.render(data);
});

// about page 
app.get('/about', function(req, res) {
    res.render('templates/about');
});

app.listen(8081);
console.log('8080 is the magic port');

