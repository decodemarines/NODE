const { Readable } = require('stream');

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this.data = data;
        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing,
        } = this._readableState;

        this.init();
    }

    init() {
        this.on('data', chunk => {
            console.log('\n---');
            console.log(chunk, typeof chunk);
            // isBuffer false потому что encoding: 'utf8',

            console.log(
                `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
                    chunk,
                )} and chunk.length is ${chunk.length}`,
            );
            console.log('---\n');
        });

        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing,
        } = this._readableState;

        this.on('close', () => {
            console.log('Readable on close event');
        });
    }

    _read() {
        let data = this.data.shift();
        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    }
}

let array = ['1'];
const options = {
    objectMode: false,
    encoding: 'utf8',
};

const rs = new StorageReader(array, options);
