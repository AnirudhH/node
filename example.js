/**
 * Created by Ani on 8/9/2016.
 */
var express = require('express');

var app = express();

// this sets a static directory for the views
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // use sendFile to render the index page
    res.render('index',{ name: "Anirudh" });
});

app.listen(3000);