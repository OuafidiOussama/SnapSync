require('dotenv').config()
const jwt = require('jsonwebtoken')


authenticate = (req, res, next)=>{
    const authHeaders = req.headers['authorization']
    if(!authHeaders){
        res.status(401).send({success: false, message: 'No Authorization Header was Found !'})
    }
    try{
        const token = authHeaders.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded.user
        next()
    }catch(err){
        res.status(401).json({
            success: false,
            message: 'Token has been Chnaged'
        })
    }
}

isLoggedIn = (req, res, next)=>{
    req.user ? next() : res.sendStatus(401)
}

module.exports = {
    isLoggedIn,
    authenticate
}