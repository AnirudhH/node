/**
 * Created by Ani on 8/9/2016.
 */
var express = require('express');
var request = require('request');

var app = express();

// this sets a static directory for the views
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // use sendFile to render the index page
    res.render('index',{ name: "Anirudh" });
});

app.get('/search', function(req, res){
    var name = req.query.name;

   res.send('Got query: '+  req.query.name + ' ' + req.query.description);
});
app.get('/about', function(req, res) {
    var qs =
    {
        s: req.query.search
    };
    request(
        {
            url: 'http://www.omdbapi.com',

            qs: qs


        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var dataObj = JSON.parse(body);
                res.render("search_results", {results: dataObj.Search});
           // res.send( dataObj.Search);
            }
        });
});
app.get('/movie', function (req,res) {
    var qs =
    {
        i: req.query.imdbid
    };
    request(
        {
            url: 'http://www.omdbapi.com',

            qs: qs


        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var dataObj = JSON.parse(body);
                res.render("detail", dataObj);
                // res.send( dataObj);
            }
        });


});
app.listen(3000);