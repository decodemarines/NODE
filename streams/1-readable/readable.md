Stream instanceof EventEmitter

Все потоки являются экземплярами EventEmitter, то есть можно генерировать события StreamClass.emit('eventName', data), и обрабатывать их StreamClass.on('eventName', (data)=>{});

new StreamObject({objectMode: false, highWaterMark: кол_во_байт}); //по умолчанию 16384 (16kb)
new StreamObject({objectMode: true, highWaterMark: кол_во_объектов});//по умолчанию  16

