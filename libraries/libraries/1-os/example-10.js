const os = require('os');

// Only for unix systems
// if used for windows [ 0, 0, 0 ]
// 1, 5, and 15 load average
// [ 2.11474609375, 2.64306640625, 2.30615234375 ]
console.log(os.loadavg());
// cpu, ram, disk input output
// мониторятся память, процессор, дисковая подсистема, сетьеавя активность
// fractional number это составное число