//  ##                      ~~  INPUT OUTPUT  ~~                       ##
// Take data from `process.stdin` and pipe it to `process.stdout`.
// With `.pipe()`. `process.stdin.pipe()` to be exact.

var fs = require('fs');
process.stdin.pipe(process.stdout);
//fs.createReadStream(process.stdin).pipe(process.stdout);
