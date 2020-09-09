INPUT/OUTPUT

1.  what is I/O? node interacts with disk,network,databases
2.  types of operations I/O:
    sync
    fork
    threads
    EventLoop
3.  Производительность серверов на очень высоком уровне благодаря асинхронности, но для операций, которые требуют много процессорного времени (рендеринг картинок), нода не самый луший выбор. Нода однопоточная, но можно создать процессы из самого файла.(WorkerThreads and Cluster Module)
4.  Event Loop появился благодаря libuv module
5.  error = null если файл прочитался."error first" подход в cb.
    Эта ошибка не ловиться через try catch, но это полноценный instance of Error with its own stack trace
    '''
    fs.readFile('./example-3.js', (error, file) => {
    if(error) throw error
    console.log(error) // null если файл прочитался
    });
    '''
6.  Проблемы асинхронных операций пример 6
7.  Решение проблем асинх операций:
    '''
    const fs = require("fs");

        let data = null;

        fs.readFile("./data/file.txt", (err, file) => {
        if (err) throw err;
        data = file;

        fs.writeFile("./data/file.back", data, err => {
        if (err) throw err;
        });
        });
        '''

    cb внутри чтение отработает только тогда, когда файл был успешно прочитан полностью и внутри появилась инфорамция об этом файле.

EVENT LOOP

1. EventLoop EL- an entity theat handles external events and converts them into callback invocations
2. Таймер выполняется не раньше указанного времени, но насколько больше зависит от нагрузки системы. По спецификации 4 мс.
3. setImmediate выполняется как хочет в своей определенной фазе, перед посреди или после таймеров, но таймеры если с одинаковым временем идут в строгой последовательности один за другим.
