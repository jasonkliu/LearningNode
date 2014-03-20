// Exercise 3 of 13: Write a program that uses a single synchronous
// filesystem operation to read a file and print the number of newlines
// it contains to the console (stdout), similar to running `cat file | wc -l`.

// This type of declaration is a global saying we need the `fs` module.
var fs = require('fs')

// All synchronous (or blocking) filesystem methods in the fs module end with
// 'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file').
// This method will return a Buffer object containing the complete contents
// of the file.

//console.log(process.argv[2]);

var toRead = process.argv[2];

fs.readFileSync('toRead');


// Buffer objects are Node's way of efficiently representing arbitrary
// arrays of data, whether it be ascii, binary or some other format.
// Buffer objects can be converted to strings by simply calling the
// toString() method on them. e.g. var str = buf.toString().

var str = buf.toString();

co nsole.log(str);
// If you're looking for an easy way to count the number of newlines
// in a string, recall that a JavaScript String can be .split() into an array
// of substrings and that '\n' can be used as a delimiter. Note that the test
// file does not have a newline character ('\n') at the end of the last line,
// so using this method you'll end up with an array that has one more element
// than the number of newlines.
