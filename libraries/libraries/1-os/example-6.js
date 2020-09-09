const os = require('os');

// Free memory
const memoryInBytes = os.freemem();
const memoryInKilobytes = Math.round(memoryInBytes / 1024);
const memoryInMegabytes = Math.round(memoryInBytes / 1024 / 1024);
const memoryInGigabytes = Math.round(memoryInBytes / 1024 / 1024 / 1024);

console.log(`My free memory ${memoryInBytes} bytes`);
console.log(`My free memory ${memoryInKilobytes} Kb`);
console.log(`My free memory ${memoryInMegabytes} Mb`);
console.log(`My free memory ${memoryInGigabytes} Gb`);

// Total memory
const totalMemoryInBytes = os.totalmem();
const totalMemoryInKilobytes = Math.round(totalMemoryInBytes / 1024);
const totalMemoryInMegabytes = Math.round(totalMemoryInBytes / 1024 / 1024);
const totalMemoryInGigabytes = Math.round(
    totalMemoryInBytes / 1024 / 1024 / 1024
);

console.log('\n========================================\n');
console.log(`My total memory ${totalMemoryInBytes} bytes`);
console.log(`My total memory ${totalMemoryInKilobytes} Kb`);
console.log(`My total memory ${totalMemoryInMegabytes} Mb`);
console.log(`My total memory ${totalMemoryInGigabytes} Gb`);


// My free memory 964640768 bytes
// My free memory 942032 Kb
// My free memory 920 Mb
// My free memory 1 Gb

// ========================================

// My total memory 4242911232 bytes
// My total memory 4143468 Kb
// My total memory 4046 Mb
// My total memory 4 Gb