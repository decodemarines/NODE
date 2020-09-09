const { Readable } = require("stream");

function clock () {
    const stream = new Readable({
      objectMode: true,
      read() {}
    })
  
    setInterval(() => {
      stream.push({ time: new Date() })
    }, 1000)
  
    return stream
  }
  clock()