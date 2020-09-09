const fs = require("fs");

let data = null;

fs.readFile("./data/file.txt", (err, file) => {
  if (err) throw err;
  data = file;
});

fs.writeFileSync("./data/file.back", data); // файл создался но внутри с текстом null let data = null;

// сначала выполнился ссинхронный код и data со значением null записаллось в file а уже потом выполнился асинхронный код