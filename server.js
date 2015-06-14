var express = require("express");
var app = express();
var port = process.env.PORT||8080;
var sm=require("sitemap");
var path=require('path');
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'views')));
// var cookie = require('cookie');
//   // var hdr = cookie.serialize('foo', 'bar');
//   // console.log(hdr)

//   // var cookies = cookie.parse('foo=bar; cat=meow; dog=ruff');
//   // console.log(cookies)


// var cookieParser = require('cookie-parser')
//   // app.use(cookieParser())

//   // app.get('/', function(req, res) {
//   //   console.log("Cookies: ", req.cookies);
//   //   console.log("dog: "+req.cookies.dog);
//   //   res.end()
//   // })


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())





app.get("/",function(req,res){
  console.log(req.body);
  res.render("index.ejs")
  res.end();
})

app.get("/zero",function(req,res){
  console.log(req.body);
  res.render("zero.ejs")
  res.end();
})


app.listen(port);
console.log("it's  happing at "+ port);























// // instance of Router
// var router = express.Router();

// router.use(function(req, res, next) {
//     console.log(req.method, req.url, req.body);
//     next();
// });



// app.route('/login')

//     // show the form (GET http://localhost:8080/login)
//     .get(function(req, res) {
//         res.send('this is the login form');
//     })

//     // process the form (POST http://localhost:8080/login)
//     .post(function(req, res) {
//         console.log('processing');
//         res.send('processing the login form!');
//     });

// // route middleware to validate :name
// router.param('name', function(req, res, next, name) {
//     // do validation on name here
//     // blah blah validation
//     // log something so we know its working
//     console.log('doing name validations on ' + name);

//     // once validation is done save the new item in the req
//     req.name = name;
//     // go to the next thing
//     next(); 
// });

// router.get('/hello/:name', function(req, res) {
//     //res.send('hello ' + req.params.name + '!');
//     res.send('hello ' + req.name + '!');
// });


// router.get('/',function(req,res){
//   res.send('this is from / using router.get()')
// })



































