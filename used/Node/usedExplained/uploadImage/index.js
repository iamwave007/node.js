var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");


var handle={};

handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;

/* handle is like this
{ '/': [Function: start],
 '/start': [Function: start],
 '/upload': [Function: upload],
 '/show': [Function: show] }
*/

server.start(router,handle);

// so the "index.js" called for the "router" as an object,
// however it didn't do anything with it
// but passing it down to the "server.js"
// it's as if the "server.js" has the "router" function now.