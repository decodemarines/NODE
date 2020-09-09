const net = require("net");

const server = net.createServer();

server.on("connection", socket => {
  console.log("New client connected!");

  socket.write("Welcome a board!\n");

  socket.on("data", msg => {
    console.log(msg);
    console.log(msg.toString());

    socket.write(`From server: ${msg.toString().toUpperCase()}`);
    // socket.write(msg);
  });
});

server.listen(8080, () => {
  console.log("TCP Server started!");
});
// запускаем сервер и телнет. На телнет пишем в терминал данные строку-на сервере получаем буфер и строку Дальше на
// Дальше на клиенте появляется строку в регистре
// Можно подключить несколько клиентов
