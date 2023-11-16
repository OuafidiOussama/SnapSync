require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()


const connectDB = require('./config/db')
connectDB()


app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

const indexRoute = require('./routes')
app.use(indexRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`app is listening on port ${process.env.PORT}`,);
})