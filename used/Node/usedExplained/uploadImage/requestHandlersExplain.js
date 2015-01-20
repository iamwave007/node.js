var querystring = require('querystring');
    //fs = require('fs'),
    //formidable = require('formidable');


var body = '<html><head>'+
    '<meta http-equiv="Content-Type" content="text/html"; charset=UTF-8" />'+
    '</head><body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" />'+
    '<input type="submit" value="Upload filed" />'+
    '</form></body></html>';

var b='<p>this is try</p>';

function start(response, request) {


    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.write(b);
    response.end();


}




function upload(response, request) {
/*
    //console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
// save the content at the location "/tmp/test.png"
    form.parse(request, function(error, fields, files) {

        fs.rename(files.upload.path, "/tmp/test.png", function(err) {
            console.log(files.upload.path);
            if (err) {
                fs.unlink("/tmp/test.png");
                fs.rename(files.upload.path, "/tmp/test.png");
            }
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br />");
        response.write("<img src='/show' />");
        response.end();
    });
*/

}



function show(response, request) {


/*
    //console.log("Request handler 'show' was called.");

     fs.readFile("/tmp/test.png", "binary", function(error,file) {
     if (error) {
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.write(err + "\n");
     response.end();
     } else {
     response.writeHead(200, {"Content-Type": "image/png"});
     response.write(file, "binary");
     response.end();
     }

     }
     );
/*
    console.log("'show' called ");
    response.writeHead(200,{"Content-Type": "image/png"});
    fs.createReadStream("/tmp/test.png").pipe(response);
*/




}

exports.start = start;
exports.upload = upload;
exports.show = show;