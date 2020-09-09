const fs = require("fs");

let data = null;

fs.readFile("./data/file.txt", (err, file) => {
  if (err) throw err;
  data = file;
});

fs.writeFileSync("./data/file.back", data); // файл создался но внутри с текстом null let data = null;
