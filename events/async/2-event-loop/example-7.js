var http = require("http");

function compute() {
  // много кода
  // много кода
  // много кода
  console.log(new Date());

  process.nextTick(compute);
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(5000, "127.0.0.1");

compute();

// из-за рекурсии nextTick выполняется бесконечно и блокирует дальнейшее выполнение если через
// курл зайти на локлхост, запрос зависнет потому что nextTick всегда выполняется перед I\O
//
