const express = require('express');
const http = require('http')
const socketio = require('socket.io')
const app = express()
app.use(express.static(__dirname));


require('dotenv').config()

const server = http.createServer(app)
// Socket IO instance is to expect to be called with raw http request 
const io = socketio(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/public/index.html`)
})
let count = 0;
io.on('connection', (socket) => {
    // socket parameter contains the information of new connected user
    // Here we can use the method on socket to communicate with specific clients
    socket.emit('countUpdated')
})


server.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT} port`))