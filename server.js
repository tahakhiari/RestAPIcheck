const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const User = require('./models/User')
app.use(express.json())
connectDB()



const PORT = process.env.PORT || process.env.port

app.listen(PORT, err => {
    err ? console.log(err)
        :
        console.log(`the server is Running of Port ${PORT} `)
})