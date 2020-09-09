const http = require('http');

const server = new http.createServer((req, res) => {});

server.listen(3030, () => {
    console.log('Server listen on port 3030');
});

setTimeout(() => {
    server.close(() => process.exit()); // так делать нельзя потому что если жестко 
    // отрубать сервер, он некоректно завершит, например, запись в бд
}, 3000);

setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);
