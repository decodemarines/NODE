const net = require("net");

const server = net.createServer();

server.on("connection", socket => {
  console.log("New client connected!");

  socket.write("Welcome a board!\n");
});

server.listen(8080, () => {
  console.log("TCP Server started!");
});

// start server and telnet or nc localhost 8080
// without connection check
