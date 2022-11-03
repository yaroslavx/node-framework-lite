const fs = require('fs');
const path = require('path');
const { Stream } = require('stream');

// fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));

// stream.on('data', (chunk) => {
//   console.log(chunk);
// });

// stream.on('start', () => {
//   console.log('stream started');
// });
// stream.on('end', () => {
//   console.log('stream closed');
// });
// stream.on('error', (e) => console.log(e));

// const stream = fs.createWriteStream(path.resolve(__dirname, 'anothertext.txt'));

// for (let i = 0; i < 20; i++) {
//   stream.write(i + '\n');
// }

// stream.end();

// const http = require('http');
// http.createServer((req, res) => {
//   const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));
//   stream.pipe();
// });
