// const fs = require('fs');

// console.log('start');

// const file = fs.readFileSync('./wrong-file.js');
// // если синхронный метод мы можем поймать его в try catch:

// console.log('end');

// start
// ENOENT: no such file or directory, open './wrong-file.js'
// end


const fs = require('fs');

console.log('start');

try{
    const file = fs.readFile('./wrong-file.js',(error,file)=>{
        if(error){
            console.log('my error',error)
        
            
        }
       
        
    });
    
}catch(error){
    console.log('catch error:',error.message) 
}

console.log('end');




// my error [Error: ENOENT: no such file or directory, open 'C:\Users\User\Desktop\NODE_QUIZ\NODE\NODE.JS\async\1-io\wrong-file.js'] {
//     errno: -4058,
//     code: 'ENOENT',
//     syscall: 'open',
//     path: 'C:\\Users\\User\\Desktop\\NODE_QUIZ\\NODE\\NODE.JS\\async\\1-io\\wrong-file.js'
//   }