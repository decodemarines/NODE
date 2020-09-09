1. Readable	Data emitter
   Writable	Data receiver
   Transform	Emitter and receiver
   Duplex	Emitter and receiver (independent)

2. Распространенная задача — парсинг файла большого объема
3. Stream instanceof EventEmitter

Все потоки являются экземплярами EventEmitter, то есть можно генерировать события StreamClass.emit('eventName', data), и обрабатывать их StreamClass.on('eventName', (data)=>{});

4. Readable.pipe(Writable);//например, по "схеме" DataBase -> File
Readable.pipe(Transform).pipe(Writable);//DataBase -> преобразовать в JSON формат -> сохранить JSON в File
Duplex.pipe(Transform).pipe(Duplex);//прочитать из DataBase -> обработать -> записать обратно в DataBase результат

Как видно — метод pipe возвращает экземпляр потока, который был передан в него, что и позволяет потоки объединять между собой.

 Метод pipe, реализован таким образом, что он решает задачу контроля «скорости» передачи данных из одного потока в другой (превышение объема внутреннего буфера потока). Например, Writable поток работает на запись медленнее, чем их передает источник данных Readable. В этом случае передача данных «приостанавливается» до тех пор, пока Writable «не сообщит» (внутренний буфер очистится), что он готов принимать следующую порцию данных

5. Buffering

Потоки хранят данные в своем внутреннем буфере. Размер буфера можно указать через параметр highWaterMark, который можно задать в конструкторе класса.

Физический смысл значение highWaterMark зависит от другой опции — objectMode.

new StreamObject({objectMode: false, highWaterMark: кол_во_байт}); //по умолчанию 16384 (16kb)
new StreamObject({objectMode: true, highWaterMark: кол_во_объектов});//по умолчанию  16

6. Object Mode

По умолчанию, потоки работают с данными в виде буфера, но так же могут работать как со строками, так и с другими объектами JavaScript (например, {«user»:{«name»:«Ivan», «last_name»:«Petrov»}}), за исключением null-объекта, который играет отдельную роль при передаче данных (если поток получает null, это является сигналом, что данных для обработки больше нет, и чтение или запись данных завершена). Как установить тот или иной режим потока при его инициализации покажем в примерах ниже.

7. https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/

The list above has some examples for native Node.js objects that are also readable and writable streams. Some of these objects are both readable and writable streams, like TCP sockets, zlib and crypto streams. 
Notice that the objects are also closely related. While an HTTP response is a readable stream on the client, it’s a writable stream on the server. This is because in the HTTP case, we basically read from one object (http.IncomingMessage) and write to the other (http.ServerResponse).

Also note how the stdio streams (stdin, stdout, stderr) have the inverse stream types when it comes to child processes. This allows for a really easy way to pipe to and from these streams from the main process stdio streams.

8. The pipe method
Here’s the magic line that you need to remember:

readableSrc.pipe(writableDest)
In this simple line, we’re piping the output of a readable stream — the source of data, as the input of a writable stream — the destination. The source has to be a readable stream and the destination has to be a writable one. Of course, they can both be duplex/transform streams as well. In fact, if we’re piping into a duplex stream, we can chain pipe calls just like we do in Linux:

readableSrc
  .pipe(transformStream1)
  .pipe(transformStream2)
  .pipe(finalWrtitableDest)

  ).pipe(c).pipe(d)

# Which is equivalent to:
a.pipe(b)
b.pipe(c)
c.pipe(d)

# Which, in Linux, is equivalent to:
$ a | b | c | d

The pipe method is the easiest way to consume streams. It’s generally recommended to either use the pipe method or consume streams with events, but avoid mixing these two. Usually when you’re using the pipe method you don’t need to use events, but if you need to consume the streams in more custom ways, events would be the way to go.

Stream events
Beside reading from a readable stream source and writing to a writable destination, the pipe method automatically manages a few things along the way. For example, it handles errors, end-of-files, and the cases when one stream is slower or faster than the other.
However, streams can also be consumed with events directly. Here’s the simplified event-equivalent code of what the pipe method mainly does to read and write data:

# readable.pipe(writable)

readable.on('data', (chunk) => {
  writable.write(chunk);
});

readable.on('end', () => {
  writable.end();
});