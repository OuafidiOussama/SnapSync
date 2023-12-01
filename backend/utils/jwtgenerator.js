require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.jwtGenerateToken = (user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY, {expiresIn: '1h'})
}