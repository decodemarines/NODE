const fs = require("fs");

console.log("start");

const file = fs.readFileSync("./example-1.js");

// blocks here until file is read
console.log(file); // Buffer

console.log(file.toString()); // utf-8

console.log("end");

// Выводит сам текст файла, все синхронные операции блокируют код.
// Получам буфер, преобразовываем в строку
