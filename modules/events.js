const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {}

// instantiate object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => console.log('Event fired!'));

// init event
myEmitter.emit('event');
