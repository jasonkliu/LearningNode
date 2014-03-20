// Exercise 6 of 13: the module

// The module must export a single function that takes three arguments:
// the directory name, the filename extension string and a callback function.
// The filename extension argument must be the same as was passed to your
// program. i.e. don't turn it in to a RegExp or prefix with "." or do
// anything else but pass it to your module where you can do what you
// need to make your filter work.

var fs = require('fs');

module.exports = function(dir, exten, callback) {
  // Same code as before but we have a function inside.
  var pat = RegExp('\\.' + exten + '$');
  fs.readdir(dir, function(err, data) {
    if (err)
	    return callback(err)
    else
      result = [];
      for (i = 0; i < data.length; i++) {
        if (pat.test(data[i])) {
          result.push(data[i]);
        }
      }
      callback(null, result);
    });
};
