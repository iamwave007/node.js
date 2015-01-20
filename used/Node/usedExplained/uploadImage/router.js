
function route(handle, pathname, response, request) {
    //console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
        //console.log(handle[pathname]);

    } else {
        //console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;

//handle[pathname] is like
//[Function: start] etc


/* handle is like this
 { '/': [Function: start],
 '/start': [Function: start],
 '/upload': [Function: upload],
 '/show': [Function: show] }
 */