const net = require("net");

const server = net.createServer();

server.on("connection", socket => {
  console.log("New client connected!");

  socket.write("Welcome a board!\n");

  socket.on("data", msg => {
    console.log(`From client: ${msg}`);

    socket.write(`From server: ${msg}`);
  });
  socket.on("close", () => {
    console.log("Client connection closed!");
  });

  socket.on("end", () => {
    console.log("Client is disconnected!");
  });
});

server.listen(8080, () => {
  console.log("TCP Server started!");
});
