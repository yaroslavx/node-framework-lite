const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork();
  }
  cluster.on('exit', () => {
    console.log(`Worker on ${process.pid} EXIT`);
    cluster.fork();
  });
} else {
  console.log(`Worker on pid ${process.pid} started`);
  setInterval(
    () => console.log(`Worker on pif ${process.pid} is working`),
    5000
  );
}
