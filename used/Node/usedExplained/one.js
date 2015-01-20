
var http=require("http");
var url=require("url");
var requestHandlers=require("./requestHandlers");


var handle={};

handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;


function start () {
    function onRequest(request,response) {
        var pathname=request.url;
        route(pathname, response, request);
    }
    http.createServer(onRequest).listen(8008);

}



function route(pathname, response, request) {
    //console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);

    } else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}


start();