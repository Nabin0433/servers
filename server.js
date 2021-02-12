
const http = require('http');
const express = require('express');
const socketio = require('socket.io');



const app = express();



const path = `${__dirname}/../client`;
app.use(express.static(path));



const server = http.createServer(app);

const io = socketio(server);

io.on('connection' , (sock) => {
  
  sock.emit('massage' ,'you conected sucssesfully');
  
  sock.on('massage', (text) => {
    io.emit('massage',text);
  });
  
  
});
server.listen(8080, (err) => {
  if (err) {
    console.error('Server Error arured' , err);
  } else {
    console.log('server lisning 8080 on clint side');
  }
});