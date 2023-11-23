require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()


const connectDB = require('./config/db')
connectDB()

app.use(express.urlencoded({limit: '50mb' ,extended: false}))
app.use(express.json({limit: '50mb'}))
app.use(cors())


const indexRoute = require('./routes')
app.use("/api",indexRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`app is listening on port ${process.env.PORT}`,);
})