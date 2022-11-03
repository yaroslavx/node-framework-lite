const path = require('path');
const fs = require('fs');

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('dir is created');
// });

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('dir is removed');
// });

// fs.writeFile(
//   path.resolve(__dirname, 'some.txt'),
//   'some text some text',
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('file is created');
//     fs.appendFile(
//       path.resolve(__dirname, 'some.txt'),
//       'some more random',
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log('file is extended');
//       }
//     );
//   }
// );

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// writeFileAsync(path.resolve(__dirname, 'some.txt'), 'some text')
//   .then(() =>
//     appendFileAsync(path.resolve(__dirname, 'some.txt'), ' some more text')
//   )
//   .then(() => readFileAsync(path.resolve(__dirname, 'some.txt')))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, 'some.txt')).then(() =>
//   console.log('file is removed')
// );

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
  .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
  .then((data) => data.split(' ').length)
  .then((count) =>
    writeFileAsync(path.resolve(__dirname, 'count.txt'), `${count}`)
  )
  .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
  .catch((err) => console.log(err));
