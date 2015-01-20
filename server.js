var express = require("express");
var app = express();
var port = process.env.PORT||8080;


// instance of Router
var router = express.Router();

router.use(function(req, res, next) {
    console.log(req.method, req.url, req.body);
    next();
});

// route middleware to validate :name
router.param('name', function(req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next(); 
});


app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

router.get('/hello/:name', function(req, res) {
    //res.send('hello ' + req.params.name + '!');
    res.send('hello ' + req.name + '!');
});


router.get('/',function(req,res){
  res.send('this is from / using router.get()')
})

app.use('/',router);






















app.listen(port);
console.log("it's  happing at "+ port);








































































