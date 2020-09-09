const { Readable } = require("stream");
// const Readable = require('stream').Readable;

// const Stream = require('stream');
// class StorageReader extends Stream.Readable {}

class StorageReader extends Readable {
  constructor(data, options) {
    super(options);

    this.data = data;
    this.init();
  }

  init() {
    this.on("data", chunk => {
      console.log("\n---");
      console.log(
        `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
          chunk
        )} and chunk.length is ${chunk.length}`
      );
    });
  }

  _read() { // правильная реализация только с методом _read()
    // push используется только внутри _read которые мы реализуем обязательно сами
    const data = this.data.shift();

    if (!data) {
      this.push(null); // как только мы передаем нуль мы даем сигнал стриму что данные прочитаны и стрим завершил чтение
    } else {
      this.push(data); //стрим потребляет данные и может их передавать дальше не важно куда
    }
  }
}

const array = [1, 2, 3]; // by default stream doesn't work with numbers
// TypeError [ERR_INVALID_ARG_TYPE]:
// The "chunk" argument must be one of type string, Buffer, or Uint8Array. Received type number
const options = {};
const rs = new StorageReader(array, options);


// TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer
// or Uint8Array.

// Uint8Array типизированный массив