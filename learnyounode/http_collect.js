// Exercise 8 of 13: Write a program that performs an HTTP GET request to
// a URL provided to you as the first command-line argument. Collect all data
// from the server (not just the first "data" event) and then write two
// lines to the console (stdout).
// The first line you write should just be an integer representing the number
// of characters received from the server and the second line should contain
// the complete String of characters sent by the server.


// 1) Collect data across multiple "data" events and append the results
// together prior to printing the output. Use the "end" event to determine
// when the stream is finished and you can write the output.
// 2) Use a third-party package to abstract the difficulties involved in
// collecting an entire stream of data. Two different packages provide a
// useful API for solving this problem (there are likely more!):
// bl (Buffer List) and concat-stream; take your pick!
//  [http://npm.im/bl](http://npm.im/bl)
//  [http://npm.im/concat-stream](http://npm.im/concat-stream)
//  $ npm install bl

var bl = require('bl');
var http = require('http');
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) throw err;
    console.log(data.length);
    console.log(data.toString());
  }));
});
