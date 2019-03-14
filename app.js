const express = require("express");
const fs = require("fs");
let app = express();

app.set('view engine', 'ejs');

// Public static files
app.use("/public", express.static("public"));

// Data
let rawData = fs.readFileSync('./JSON/data.json');
let data = JSON.parse(rawData);

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.json(data);
    //res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');