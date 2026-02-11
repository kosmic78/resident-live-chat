const { Server } = require('socket.io');

const server = new Server({cors: {origin: 'http://localhost:4200'}}); // allow Angular dev server to connect

server.on('connection', (socket) => { // handle events for each connected client (each browser tab creates a new socket)
    socket.on('message', (data) => { // listens every time the 'message' event is emmitted from ChatService
        socket.broadcast.emit('received', {data: data, message: 'Received'}); // broadcasts the data to all the other connected tabs
    });
});

server.listen(8988);