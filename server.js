var express = require("express");
var app = express();
var port = process.env.PORT||8080;
var sm=require("sitemap");
var path=require('path');
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, '/views')));


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())





app.get("/",function(req,res){
  res.render("index.ejs")
  res.end();
})

app.get("/zero",function(req,res){
  res.render("zero.ejs")
  res.end();
})

app.get("/zero0",function(req,res){
  res.render("zero0.ejs")
  res.end();
})


app.listen(port);
console.log("it's  happing at "+ port);




