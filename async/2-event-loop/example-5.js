const fs = require("fs");


// not original code

const cb = () => {
  console.log("callback");
};

const interval = setInterval(() => {
  console.log("interval as marker of next loop");
}, 0);

setTimeout(() => {
  process.nextTick(cb);
  console.log('1 timeout'); 
  process.nextTick(cb);
  setTimeout(() => {
    fs.open(__filename, "r", () => {
      console.log("IO"); 
    });
    process.nextTick(cb);
    console.log('2 timeout'); 
    process.nextTick(cb);
    clearInterval(interval);
  }, 0);
}, 0);

console.log("CL");



