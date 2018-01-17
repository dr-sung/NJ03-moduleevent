const events = require('events');
const emitter1 = new events.EventEmitter();
const emitter2 = new events.EventEmitter();

function f1() {
    console.log('f1 is listening');
}

function f2(e) {
    console.log('f2 is listening', e);
}

emitter1.on('event1', f1);
emitter1.on('event1', f2);
emitter1.on('event1', () => {
    console.log('anonymous func1 is listening');
});

let obj = {name: 'John', age: 23};

emitter2.once('event2', f2); // only once

emitter1.emit('event1', obj);
emitter2.emit('event2', 'event2 is triggered');
emitter2.emit('event2', 'event2 is triggered again');