const express = require('express')
const router = express.Router()
const {register, login, logout} = require('../controllers/userController')
require('../utils/gAuth')
const passport = require('passport')

router
    .route('/auth/google')
    .get(passport.authenticate('google', {scope: ['email', 'profile']}))

router
    .route('/google/callback')
    .get(passport.authenticate('google', {
        successRedirect : "/protected",
        failureRedirect: "/auth/failure"
    }))

router
    .route('auth/failure')
    .get((req,res)=>{
        res.send('failed to login')
    })
router
    .route('/register')
    .post(register)

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .get(logout)

module.exports = router