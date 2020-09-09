const fs = require("fs");

console.log("start");

fs.readFile("./wrong-file.js", (error, file) => {
  // если не обработать ошибку то процес остановлен не будет
  // if (error) throw error;
  console.log(file);
});

console.log("end");
// start;
// end;
// undefined; хотя здесь была ошибка и она не обработалась и файл не прочитался
