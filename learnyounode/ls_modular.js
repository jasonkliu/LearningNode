// Exercise 6 of 13: You must write a module file to do most of the work.
// The module must export a single function that takes three arguments: the
// directory name, the filename extension string and a callback function. The
// filename extension argument must be the same as was passed to your program.
// i.e. don't turn it in to a RegExp or prefix with "." or do anything else
// but pass it to your module where you can do what you need to make your
// filter work.

// Read from file ./ls_mymodule (js extension optional)
var mymodule = require('./ls_mymodule.js')
var dir = process.argv[2]
var exten = process.argv[3]

// Module `mymodule` has function `lsgrep`, function prototype
// exports.lsgrep = function(dir, exten, callback)
// returns a results[] array with all of the values.
// If we didn't have restriction for module.exports, mymodule.lsgrep(....) 
mymodule(dir, exten, function(err, data) {
  if (err) throw err;
  for (i = 0; i < data.length; i++) {
    console.log(result[i]);
  }
});
