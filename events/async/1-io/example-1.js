const fs = require("fs");

console.log("start");

const file = fs.readFileSync("./example-1.js");

// blocks here until file is read read
console.log(file); // Buffer

console.log(file.toString()); // utf-8

console.log("end");

// start
// <Buffer 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 27 66 73 27 29 3b 0a 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 27 73 74 61 72 74 27 29 3b 0a 0a
// ... >
// const fs = require('fs');

// console.log('start');

// const file = fs.readFileSync('./example-1.js');

// // blocks here until file is read read
// console.log(file); // Buffer

// console.log(file.toString()); // utf-8

// console.log('end');

// end
