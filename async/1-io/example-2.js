const fs = require("fs");

console.log("start");

const file = fs.readFile("./example-2.js", (error, file) => {
  console.log("file info");
});

console.log(file);

console.log("end");

// start
// undefined потому что операция асинхронная
// end
// file info
