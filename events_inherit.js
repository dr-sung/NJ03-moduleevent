const events = require('events');

class MyEvent extends events.EventEmitter {
    constructor(message) {
        super();
        this.message = message;
    }
    showMessage() {
        this.emit('event_show', this.message);
    }
}

let myevent = new MyEvent('We will hapve a party!');
myevent.on('event_show', (m) => {
    console.log(m);
});

myevent.showMessage();