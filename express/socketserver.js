const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')
const socket  = http.createServer(app);
const io = new Server(socket);
const {fileURLToPath} = require('url')


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
});


io.on("connection", (socket)=>{
    console.log("user connected", socket.id);
    socket.on("chatMessage", (msg)=>{
        console.log("message: " + msg);

        io.emit("chatMessage", msg);
    })

    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id);
    })
    
})