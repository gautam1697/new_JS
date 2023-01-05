//Programs showing the concept of  event handlers and event transmitters

var events=require('events')
//create Event Emitter object

var eventEmitter=new events.EventEmitter();
var connectHandler=function connected(){
    console.log('connection successfull.')
    //fire the data_recieved event
eventEmitter.emit('data_recieved');
}
eventEmitter.on('connection', connectHandler);  
//bind the connection event with the handler
eventEmitter.on('data_recieved',function(){
    console.log('data recieved successfully.');
});
eventEmitter.emit('connection')
console.log('End')

//
