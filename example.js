/**
 * Created by Ani on 8/9/2016.
 */

var express = require('express');
var request = require('request');
var path = require('path');
var hbs = require('hbs');


var app = express();


// this sets a static directory for the views/*
app.set('view engine', 'hbs' );


app.get('/', function(req, res) {
    // use sendFile to render the index page
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/title',function(req,res){
    res.sendFile(path.join(__dirname+'/title.html'));
});
// app.get('/search', function(req, res) {
//     var name = req.query.name;
    //
    // res.send(req.query.name);
app.get('/title/detail', function(req, res) {
    var qs =
    {
        t: req.query.title


    };
    request(
        {
            url: 'http://www.omdbapi.com',

            qs: qs


        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var dataObj = JSON.parse(body);
                res.render("hello", {results: dataObj});
            }
        });
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
                 res.render("search_results", {result: dataObj.Search} );
           // res.send( dataObj);
                // console.log(body);

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
console.log("Server started");
