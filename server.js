const express = require('express');
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.sendFile()
})


app.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT} port`))