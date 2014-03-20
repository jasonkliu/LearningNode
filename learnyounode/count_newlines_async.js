// Exercise 4 of 13: Write a program that uses a single asynchronous
// filesystem operation to read a file and print the number of newlines
// it contains to the console (stdout), similar to running cat file | wc -l.

var fs = require('fs')

fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});

/*Instead of fs.readFileSync() you will want to use fs.readFile()
and instead of using the return value of this method you need to
collect the value from a callback function that you pass in as
the second argument.

Remember that idiomatic Node.js callbacks normally have the signature:

    function callback (err, data) { .. }

so you can check if an error occurred by checking whether the first
argument is truthy. If there is no error, you should have your Buffer
object as the second argument. As with readFileSync(), you can supply
'utf8' as the second argument and put the callback as the third a
rgument and you will get a String instead of a Buffer.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html*/
