// Exercise 12 of 13: Write an HTTP server that receives only POST requests
// and converts incoming POST body characters to upper-case and returns
// it to the client. Your server should listen on the port provided by the
// first argument to your program.


var http = require('http');
var map = require('through2-map');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')
  res.writeHead(200, { 'content-type': 'text/plain' })
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)

});
server.listen(process.argv[2]);
