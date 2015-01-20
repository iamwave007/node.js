var fs=require('fs');

fs.readFile('pap.txt','utf8',function(error,data){
    console.log(data);
});

fs.readFile('try.html','utf8',function(error,data){
    console.log(data);
});

fs.readdir(process.cwd(),function(err,files){
    if(err){
        return console.log(err)
    }
    console.log(files)
})

console.log("content of the file");

////////////line//////////////////////
// takes data from html file and display them into the page

var http=require("http");
var fs=require('fs');

var data;

fs.readFile('input.html','utf8',function(error,dat){
    data=dat;
    //console.log(data);
});


var server=http.createServer(function(request,response){
    var url=request.url;
    response.writeHead(200,{
        'Content-Type':'text/html'
    });
    response.end(data);

});

server.listen(3001);


////////////line//////////////////////



var http=require("http");

var server=http.createServer(function(request,response){
    var url=request.url;
    response.writeHead(200,{
        "Content-Length":sth.length,
        'Content-Type':'text/html'
    });
    response.end("<h1>from Node.js</h1><p>URL is "+url+"</p>");

});

server.listen(3001);




////////////line//////////////////////

var http = require('http');

var postHTML =
    '<html><head><title>Post Example</title></head>' +
    '<body>' +
    '<form method="post">' +
    'Input 1: <input name="input1"><br>' +
    'Input 2: <input name="input2"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write(postHTML);
        console.log(body+"body is here");

        body += chunk;
        console.log('POSTed: ' + body);
        res.end();
    });

}).listen(8080);

////////////line//////////////////////



var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(8080);


////////////////////////////
var http = require('http');

var words="Hellow world"
var requestListener = function (req, res) {
    res.writeHead(200,{
        'Content-Length':words.length,
        'Content-Type':'text/plain'
    });
    res.end(words + "\n");
}

var server = http.createServer(requestListener);
server.listen(8080);


///////////////////////////////////////////////
fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});
///////////////////////////////////////////////


var path=require('path');
a=path.join(process.cwd(),"anything here","anything there");
console.log(a);


var path=require('path');
a=path.join(process.cwd(),"anything here","anything there");
console.log(a);


path.exists('/etc', function(exists){console.log("Does the file exist?", exists)});



///////////////////////////////////////////////
var static = require('node-static');

var fileServer = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
        fileServer.serveFile('pap.html', 500, {}, request, response);
    }).resume();
}).listen(8080);


///////////////////////////////////////////////
var fs = require('fs');
var http = require('http');
var url = require('url') ;

http.createServer(function (req, res) {
    //var queryObject = url.parse(req.url,true).query;
    var queryObject=req.url;
    console.log(queryObject);

    res.writeHead(200);
    res.end('Feel free to add query parameters to the end of the url');
}).listen(8080);


///////////////////////////////////////////////
//
http=require('http');

var option={
    "host":"step8.jit.su",
    "path":"/"
};

var callback=function(response){
    var str='';
    response.on('data', function (chunck) {
        console.log(chunck+"/nthis is a new chunck");
        str+=chunck;
    });
    response.on('end',function(){
        console.log("this is the end of all");
        console.log(str.length);
        //console.log(str);
    })
};


http.request(option,callback).end();


///////////////////////////////////////////////
var colors = require('colors'),
    stringOne = 'This is a plain string.',
    stringTwo = 'This string is red.'.red,
    stringThree = 'This string is blue.'.blue,
    b={one:1,two:2,three:3};

console.log(stringOne.green);
console.log(stringOne.yellow);

console.log(stringTwo);
console.log(stringThree);

console.log(stringTwo.magenta);
console.log(stringThree.grey.bold);

// only string..
///////////////////////////////////////////////
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (text) {
    console.log('received data:', text);
    console.log(text.length);
    console.log(util.inspect(text));
    console.log(util.inspect(text).length);
    if (text === 'quit') {
        done();
    }
});

function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
}

////////////////////////////////////////
var prompt = require('prompt');

prompt.start();//not useful?.

prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

function onErr(err) {
    console.log(err);
    return 1;
}

////////////////////////////////////////////
var prompt = require('prompt');

var properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'password',
        hidden: true
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
});

function onErr(err) {
    console.log(err);
    return 1;
}
////////////////////////////////////////////
//asynch
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i);
}

for (var i = 0; i < 5; i++) {

    console.log(i);

}

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function () {
            console.log(i);
        }, i);
    })(i);
}

////////////////////////////////////////////

var fs = require('fs');

fs.readFile('pap.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data+"fs.readFile");
});

//====================

var data = fs.readFileSync('pap.txt','utf8');
console.log(data+"fs.readFileSync");

