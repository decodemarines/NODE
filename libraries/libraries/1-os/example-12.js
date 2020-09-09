const os = require('os');

// 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'
// android - experimental
console.log(os.platform());

// OR

console.log(process.platform); // as constant

// Mine
// win32
// win32
// For unix systems it will return darwin