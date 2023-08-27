const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection",(socket)=>{
    console.log("hello");
    console.log(socket);
})

server.listen(3000, ()=>{
    console.log("started");
})
