//Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");

//var db = require("./models");


mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
  useMongoClient: true
});


// Initialize Express
var MainPage = "";
var app = express();

var articleArray = "";

app.use(express.static("public"));

//setup handlebars

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Database configuration
var databaseUrl = "Owlist";
var collections = ["ParentSchema"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.get("/get", function (req, res ) {});

app.get("/post", function (req, res) {});

app.get("/delete", function (req, res) {});


app.get("/", function (req, res) {
    res.render("index", MainPage)
});

// Listen on port 3000
app.listen(3000, function () {
    console.log("App running on port 3000!");
});