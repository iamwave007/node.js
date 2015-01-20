
var static = require('node-static');

var fileServer = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
        fileServer.serveFile('pap.html', 500, {}, request, response);
    }).resume();
}).listen(8008);



