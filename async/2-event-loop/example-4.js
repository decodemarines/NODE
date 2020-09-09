const fs = require("fs");

fs.open(__filename, "r", () => {
  console.log("IO"); // I/O operations
});

setImmediate(() => {
  console.log("immediate"); // after all I/O
});

process.nextTick(() => {
  console.log("next tick"); // before all I/O
});

// next tick example
// createServer под капотом запускает next tick
// сам сервер будет запускаться на следующей итерации next tick чтобы дать возмоность обработчикам повесится на сервер
// обработчики нужно вешать до того, как событие произошло

// const server = net.createServer().listen(8080);

// server.on('listen', () => {
//     console.log('Log');
// });
