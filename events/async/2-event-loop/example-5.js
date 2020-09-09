const cb = () => {
  console.log("Processed in next iteration");
};
process.nextTick(cb);
console.log("Processed in the first iteration");

// Processed in the first iteration
// Processed in next iteration
