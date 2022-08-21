const { Socket } = require('dgram');

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server , 
    { cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
  }});
io.on('connection', ( socket ) => { 
    console.log("User connected succesfully");
    socket.on("roomsatu" ,  function(data) {
        console.log(data)
        io.emit("dewanipara" , data )
    } )
 });
server.listen(8000);