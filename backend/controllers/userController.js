const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const {jwtGenerateToken} = require('../utils/jwtgenerator')

register = async(req, res)=>{
    const {email} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        return res.status(400).json({
            success: false,
            message: "Email Already Exists"
        })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    }
    try {
        const user = await User.create(data)
        res.status(201).json({
            success: true,
            user: user
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

login = async (req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid Email"
            })
        }
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid){
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }
        const token = jwtGenerateToken(user)

        res.status(200).json({
            success: true,
            message: "login successful",
            user: user,
            token: token
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Cannot Log in, Verify your email & password"
        })
    }
}

logout = async (req,res)=>{
    res.status(200).json({
        success: true,
        message: "logout Successfully"
    })
}

module.exports = {register, login, logout}