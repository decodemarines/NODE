const fs = require('fs');

fs.readFile(__filename, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});
