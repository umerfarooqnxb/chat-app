const express = require('express');
const http = require('http')
const socketio = require('socket.io')
const app = express()
require('dotenv').config()

const server = http.createServer(app)
// Socket IO instance is to expect to be called with raw http request 
const io = socketio(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/public/index.html`)
})

io.on('connection',()=>{
    console.log("Web socket connection")
})


server.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT} port`))