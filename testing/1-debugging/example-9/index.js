const dg = require('debug');

const debugLog1 = dg('marker:1');
const debugLog2 = dg('marker:2');

debugLog1('Message 1');

debugLog2('Message 2');

// from cmd works
// doesn't work from vsc terminal
// set DEBUG=marker
// C:\Users\User\Desktop\NODE_QUIZ\NODE\NODE.JS\testing\1-debugging\example-8>node index.js
//   marker Message 1 +0ms
// Message 2
//   marker Message 3 +4ms