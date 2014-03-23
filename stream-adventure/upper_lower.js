// ##                          ~~  LINES  ~~                          ##

// Instead of transforming every line as in the previous "INPUT OUTPUT" example,
// for this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered. For example
// given this input:

// One   ->  one
// Two   ->  TWO
// Three ->  three
// Four  ->  FOUR

var number = 0;
var split = require('split');
var through = require('through');
process.stdin
  .pipe(split())
  .pipe(through(function (line) { 
    ++number;
    if (0 === number%2)
        console.log(line.toString().toUpperCase());
    else
        console.log(line.toString().toLowerCase());

}));

//var tr = through(function (buf) {
//    this.queue(buf.toString().toUpperCase());
// });

