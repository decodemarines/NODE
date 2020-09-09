const os = require('os');

const uptime = os.uptime();
const uptimeM = Math.round(os.uptime() / 60);
const uptimeH = Math.round(os.uptime() / 60 / 60);
const uptimeD = Math.round(os.uptime() / 60 / 60 / 24);

console.log(`Uptime: ${uptime} sec`);
console.log(`Uptime: ${uptimeM} mins`);
console.log(`Uptime: ${uptimeH} hours`);
console.log(`Uptime: ${uptimeD} days`);


// how much time the system works without restart
// for mac sleep doesn't count
// Uptime: 2138891 sec
// Uptime: 35648 mins
// Uptime: 594 hours
// Uptime: 25 days