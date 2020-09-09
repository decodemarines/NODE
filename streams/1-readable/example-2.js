const { Readable } = require("stream");

class StorageReader extends Readable {
  constructor(data, options) {
    super(options);

    this.data = data;
    this.init();
  }

  init() {
    this.on("data", chunk => {
      console.log("\n---");
      console.log(chunk); // <Buffer 31> Бинарный формат
      console.log(
        `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
          chunk
        )} and chunk.length is ${chunk.length}`
      );
    });
  }

  _read() {
    console.log('1',this.data) // []
    const data = this.data.shift();
    console.log('2',data) // undefined

    if (!data) {
      this.push(null);
    } else {
      this.push(data);
    }
  }
}

const array = ["1", "2", "3"];
const options = {};

const rs = new StorageReader(array, options);



// ---
// <Buffer 31>
// chunk = 1 chunk isBuffer true and chunk.length is 1

// ---
// <Buffer 32>
// chunk = 2 chunk isBuffer true and chunk.length is 1

// ---
// <Buffer 33>
// chunk = 3 chunk isBuffer true and chunk.length is 1