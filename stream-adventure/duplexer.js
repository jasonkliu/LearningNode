// ##                        ~~  DUPLEXER  ~~                         ##
// Write a program that exports a function that spawns a process from a `cmd`
// string and an `args` array and returns a single duplex stream joining together
// the stdin and stdout of the spawned process:

var spawn = require('child_process').spawn;
var duplex = require('duplexer');
// var grep = spawn.exec('grep Stream');
	    
module.exports = function (cmd, args) {
   // spawn the process and return a single stream
   // joining together the stdin and stdout here
   var ps = spawn(cmd, args);
   return duplex(ps.stdin, ps.stdout);
};

// There is a very handy module you can use here: duplexer. The duplexer module
// exports a single function `duplexer(writable, readable)` that joins together a
// writable stream and readable stream into a single, readable/writable duplex
// stream.

// If you use duplexer, make sure to `npm install duplexer` in the directory where
// your solution file is located.

