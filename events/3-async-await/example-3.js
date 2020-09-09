'use strict';

const promise = async () => {
    throw new Error('Something went wrong');
    return 1;
};

 // promise(); //  UnhandledPromiseRejectionWarning: Error: Something wrong

promise().catch(error => {
    console.log(error.name);
    console.log(error.message);
});
