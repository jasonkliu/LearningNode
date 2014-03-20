// Exercise 2 of 13: Write a program that accepts one or more numbers
// as command-line arguments and prints the sum of those numbers
// to the console (stdout).

// Also be aware that all elements of process.argv are strings and you
// may need to coerce them into numbers. You can do this by prefixing
// the property with + or passing it to Number(). e.g. +process.argv[2]
// or Number(process.argv[2]).


//console.log(process.argv);

var arrayLength = process.argv.length - 2;
var sumtotal = 0;
//console.log(arrayLength);

for (var i = 0; i < arrayLength; i++) {
    sumtotal += +process.argv[i+2];
}

console.log(sumtotal);
