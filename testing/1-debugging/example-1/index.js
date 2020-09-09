const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const file = readFile(__filename, { encoding: 'utf8' });

file.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error.message);
});
// node --inspect-brk example-1
// Debugger listening on ws://127.0.0.1:9229/22fd28c1-758f-4982-ae5c-d2c6d078c007