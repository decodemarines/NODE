'use strict';
const getValue = async () => {
    console.log('при инициализации промиса через async, не выводтся в консоль как при new Promise')
    return 1;
};

// const getValue = () =>
//     new Promise(resolve => {
//         resolve(1);
//     });

const f = async () => {
    const value = await getValue();
    console.log(value);
};

f();

// (async () => {
//     const value = await getValue();
//     console.log(value);
// })();
