require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:5000/api/user/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(err, profile);
  }
));

passport/passport.serializeUser(function(user, done){
  done(null, user)
})
passport/passport.deserializeUser(function(user, done){
  done(null, user)
})