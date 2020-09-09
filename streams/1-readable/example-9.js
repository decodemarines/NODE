// process.stdin implements Readable Stream
process.stdin.on('data', data => {

    if (data.toString() === 'start\r\n') {
        // \r\n for Windows
        // \n for Linux
        console.log('GO!!!!!!!!!!!!!');
    }

    // if (data.toString() === 'end\n') {
    //     process.exit();
    // }

    console.log(`Length of data: ${data.length}`);
});
