const fs = require("fs");

let data = null;

fs.readFile("./data/file.txt", (err, file) => {
  if (err) throw err;
  data = file;

  fs.writeFile("./data/file.back", data, err => {
    if (err) throw err;
  });
});
// Правильное решение проблемы
// Неправильное последовательно синхр чтение и запись не вложенные
