//  ##                        ~~  MEET PIPE  ~~                        ##
// You will get a file as the first argument to your program (process.argv[2]).
// Use `fs.createReadStream()` to pipe the given file to `process.stdout`.

//console.log(process.argv);

var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);
