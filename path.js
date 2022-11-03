const path = require('path');

const fullpath = path.resolve('first', 'second');
console.log(fullpath);
console.log(path.parse(fullpath));
