// Simple server to say "Hello World". run by `node hello_world.js`
// Interestingly, do `curl 127.0.0.1:8124 to get the response.
// Use `screen` then run the command to run regardless of terminal.

var http = require('http');
http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/plain'});
		    res.end('Hello World\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
