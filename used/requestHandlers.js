



var fs=require("fs");


var b='<p>this is try</p>';

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