const callback = str => {
    console.log(str);
};

setInterval(callback, 1000, 'Text');

// Таймер постоянно что-то планирует, EventLoop постоянно чем-то занят
