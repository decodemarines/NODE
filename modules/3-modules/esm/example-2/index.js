// ES2015 Modules
// node --experimental-modules --no-warnings example-2
// import  {n} from './source.mjs';
import  {n} from './source.js';

console.log(n); // 1

// ANSWER: node --experimental-modules --no-warnings index.js
// only using package.json

// NOT RESOLVED with mjs extension for 12.0.0
// RESOLVED with mjs extension for 14.7.0
// Error:
//  let url = moduleWrapResolve(specifier, parentURL);

// Начиная с 13 версии nodejs, при использовании импортов нужно
//  обязательно указывать расширение файла. При импорте индексного
//   файла из директории также нужно полностью указывать путь до файла,
//    то есть "../index.js" (ссылка на документацию).

// It turns out in experimental model you need to define the full path with extension.
// import api from './src/server/api/index.js'

// Node.js will treat the following as ES modules when passed to node as the initial
//  input, or when referenced by import statements within ES module code:

// Files ending in .mjs.

// Files ending in .js, or extensionless files, when the nearest parent package.json 
// file contains a top-level field "type" with a value of "module".

// Strings passed in as an argument to --eval or --print, or piped to node via STDIN,
//  with the flag --input-type=module.