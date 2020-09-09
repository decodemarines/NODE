const EventEmitter = require('events');
// const EventEmitter = require('events').EventEmitter;

const storage = new EventEmitter();

storage.on('mydata', data => {
    if (data.age >= 21) {
        data.valid = true;
    }
});

storage.on('mydata', data => {
    console.log(data);
});

storage.emit('mydata', { name: 'John', age: 18 });
storage.emit('mydata', { name: 'Joe', age: 21 });

// storage.emit(Symbol('data'), { name: 'John', age: 18 });
