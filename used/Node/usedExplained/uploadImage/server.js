var http=require("http");
var url=require("url");

function start (router,handle) {
	function onRequest(request,response) {

        //original:   var pathname = url.parse(request.url).pathname;
        var pathname=request.url;
        //console.log("pathname  " + pathname + " is received.");
        //console.log(request.url);//result: the stuff following the "/"
        //console.log(url.parse(request.url));
        //console.log(url.parse(request.url).pathname);
        router.route(handle, pathname, response, request);
        //console.log(request); "request" is a giant object
        //console.log("this is executed every time: ");
        //console.log("when there's a request, for something in the 'requestHandlers'")
        // "pathname" leads to each function in the "requestHandlers"
        // here it happens twice: upload(), and then show()
        //console.log(pathname);
        //console.log(handle);
        //console.log(router); // contains every function in the "router object"
        //console.log(typeof router);// it's a object
    }

	http.createServer(onRequest).listen(8008);
	//console.log(http.createServer);
}

exports.start=start;
//"exports" is to work on function, export them.
// exports.functionName=functionName