// ##                     ~~  DUPLEXER REDUX  ~~                      ##

// In this example, you will be given a readable stream, `counter`, as the first
// argument to your program:


// Return a duplex stream with the `counter` as the readable side. You will be
// written objects with a 2-character `country` field as input, such as these:
// {"short":"OH","name":"Ohio","country":"US"}
// {"name":"West Lothian","country":"GB","region":"Scotland"}
// {"short":"NSW","name":"New South Wales","country":"AU"}
// Create an object to keep a count of all the countries in the input. Once the
// input ends, call `counter.setCounts()` with your country counts.

var spawn = require('child_process').spawn;
var through = require('through');
var duplex = require('duplexer');

module.exports = function (counter) {
// return a duplex stream to capture countries on the writable side
// and pass through `counter` on the readable side
   var counts = {};
   var input = through(write, end);
   return duplex(input, counter);

   function write (row) {
   counts[row.country] = (counts[row.country] || 0) + 1;
   }
   function end () { counter.setCounts(counts) }
};

