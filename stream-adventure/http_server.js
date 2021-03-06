// ##                       ~~  HTTP SERVER  ~~                       ##
// In this challenge, write an http server that uses a through stream to 
// write back the request stream as upper-cased response data for POST requests.
// Streams aren't just for text files and stdin/stdout. Did you know that http
// request and response objects from node core's `http.createServer()` handler are
// also streams?

// For example, we can stream a file to the response object: 
/*
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  fs.createReadStream('file.txt').pipe(res);
});
server.listen(process.argv[2]);
*/

// This is great because our server can response immediately without buffering
// everything in memory first.
// We can also stream a request to populate a file with data:
/*
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(fs.createWriteStream('post.txt'));
  }
  res.end('beep boop\n');
});
server.listen(process.argv[2]);
// You can test this post server with curl:  
$ node server.js 8000 &
$ echo hack the planet | curl -d@- http://localhost:8000
beep boop
$ cat post.txt
hack the planet
*/

// Your http server should listen on the port given at process.argv[2] and convert
// the POST request written to it to upper-case using the same approach as the TRANSFORM example.

var http = require('http');
var through = require('through')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  process.stdin.pipe(through(write, end)).pipe(process.stdout);
  res.end('Hello World\n');
}).listen(process.argv[2], "127.0.0.1");
//console.log('Server running at http://127.0.0.1:8124/');
				    
function write (buf) { this.queue(buf) }
function end () { this.queue(null) }



