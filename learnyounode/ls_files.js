// Exercise 5 of 13: Create a program that prints a list of files in a
// given directory, filtered by the extension of the files. You will be
// provided a directory name as the first argument to your program
// (e.g. '/path/to/dir/') and a file extension to filter by as
// the second argument.  For example, if you get 'txt' as the second argument
// then you will need to filter the list to only files that end with .txt.

var fs = require('fs');
var pat = RegExp('\\.' + process.argv[3] + '$');

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err;
  for (i = 0; i < list.length; i++) {
    if (pat.test(list[i])) {
      console.log(list[i]);
    }
  }
});

// Official Solution
/*
  var fs = require('fs')
  var path = require('path')

  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
  })
*/
