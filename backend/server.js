require('dotenv').config()
const express = require('express')
const app = express()


const connectDB = require('./config/db')
connectDB()


app.use(express.json())

const indexRoute = require('./routes')
app.use(indexRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`app is listening on port ${process.env.PORT}`,);
})