// Exercise 9 of 13: This problem is the same as the previous problem
// (HTTP COLLECT) in that you need to use http.get(). However, this time you
// will be provided with three URLs as the first three command-line arguments.
// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that
// you must print them out in the same order as the URLs are provided to you
// as command-line arguments.

// You will need to queue the results and keep track of how many of the URLs
// have returned their entire contents. Only once you have them all, you can
// print the data to the console.

var bl = require('bl');
var http = require('http');
var pages = [];
var truecount = 3;

// help from https://stackoverflow.com/questions/20754367/
// handling-multiple-call-asynchronous-callbacks
function printUrls() {
  if (--truecount > 0)
    return;
  for (i = 0; i < pages.length; i++) {
    console.log(pages[i].data);
  }
}

function HTMLPage(url) {
  var _page = this;
  _page.data = '' // Variable is still undefined
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      _page.data += data;
    });
    response.on('end', printUrls);
  });
}

for (var i = 2; i < 5; i++)
  pages.push(new HTMLPage(process.argv[i]));
