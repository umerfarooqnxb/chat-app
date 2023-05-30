const express = require('express');
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const app = express()
app.use(express.static(path.join(__dirname, "./public")));


require('dotenv').config()

const server = http.createServer(app)
// Socket IO instance is to expect to be called with raw http request 
const io = socketio(server)

app.get('/', (req, res) => {
    res.sendFile(`index.html`)
})
let count = 0;
io.on('connection', (socket) => {
    // socket parameter contains the information of new connected user
    // Here we can use the method on socket to communicate with specific clients
    socket.emit('countUpdated', count)
    socket.on('incremented', () => {
        count++
        // I didn't want to emit an event to a particular connection  
        // socket.emit('countUpdated',count)

        // To emit an event to every single connected user
        io.emit('countUpdated',count)
    })
})


server.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT} port`))