const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your First Name']
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Last Name']
    },
    email:{ 
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Email']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Email']
    },
}, {timestamps: true})


module.exports = mongoose.model("users", userSchema)