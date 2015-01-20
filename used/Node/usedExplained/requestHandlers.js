
var body = '<html><head>'+
    '<meta http-equiv="Content-Type" content="text/html"; charset=UTF-8" />'+
    '</head><body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" />'+
    '<input type="submit" value="Upload filed" />'+
    '</form></body></html>';

var b='<p>this is try</p>';

var fs=require("fs");

function start(response, request) {


    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.write(b);
    response.end();


}




function upload(response, request) {

    fs.readFile("file.txt", function(error, buffer) {
        if (error)
            throw error;
        console.log("The file contained", buffer.length, "bytes.",
            "The first byte is:", buffer[0]);
        console.log(buffer);
    });

    response.writeHead(200, {"Content-Type": "text/html"});

    response.end();
}



function show(response, request) {



}

exports.start = start;
exports.upload = upload;
exports.show = show;