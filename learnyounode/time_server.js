// Exercise 10 of 13: Your server should listen to TCP connections on the port
// provided by the first argument to your program. For each connection you
// must write the current date & time in the format: "YYYY-MM-DD hh:mm"
// Month, day, hour and minute must be zero-filled to 2 integers. For example:
// "2013-07-06 07:42"

// console.log(process.argv[2]);

var net = require('net');
var server = net.createServer(function (socket) {
  var d = new Date();
  var m = d.getMonth();
  var day = d.getDate();
  var h = d.getHours();
  var min = d.getMinutes();
  //console.log(d.getFullYear());
  if (m < 10)
    m = "0" + (d.getMonth() + 1); // Month starts at 0 for some reason
  if (day < 10)
    day = "0" + d.getDate();
  if (h < 10)
    h = "0" + d.getHours();
  if (min < 10)
    min = "0" + d.getMinutes();
  var time = d.getFullYear() + '-'+ m + '-' + day + " " + h + ":" + min + '\n';
  socket.write(time);
  socket.end();
  // Alternatively socket.end(time) instead of both.
});
server.listen(process.argv[2]);

// didn't know this worked in javascript
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
