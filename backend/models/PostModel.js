const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    creator:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Creator Name']
    },
    title:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Title']
    },
    message:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Message']
    },
    tags:{
        type: String,
        trim: true,
        required: [true, 'Please Provide at least one Tag']
    },
    picture:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Picture']
    },
    likes: {
        type:Number,
        default: 0
    }
}, {timestamps: true})

module.exports = mongoose.model("posts", postSchema)