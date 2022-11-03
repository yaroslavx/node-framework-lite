const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
  console.log(data);
  console.log(second);
});

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 155);
} else {
  emitter.emit('message', 'message is empty');
}
