// Exercise 13 of 13: Write an HTTP server that serves JSON data when it
// receives a GET request to the path '/api/parsetime'. Expect the request to
// contain a query string with a key 'iso' and an ISO-format time as the value.
// For example: /api/parsetime?iso=2013-08-10T12:10:15.474Z
/*    {
        "hour": 14,
        "minute": 23,
        "second": 15
      }                 */
// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time under the property 'unixtime'.
// For example:  { "unixtime": 1376136615474 }
// Your server should listen on the port provided by the first
// argument to your program.


var url = require('url');
var http = require('http');
var map = require('through2-map');
var fs = require('fs');

var routes = {
  "/api/parsetime": function(parsed) {
    d = new Date(parsed.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },

  "/api/unixtime": function(parsed) {
    d = new Date().toISOString();
    return { unixtime: (new Date(parsed.query.iso)).getTime() };
  }
}


var server = http.createServer(function (req, res) {
  parsed = url.parse(req.url, true);

  if (req.method != 'GET')
    return res.end('send me a GET\n')
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify(routes[parsed.pathname](parsed)));
});
server.listen(process.argv[2]);
