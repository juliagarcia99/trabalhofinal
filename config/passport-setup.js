const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 978741619526221,
    clientSecret: d022684fd63d8597ece310e40417418d,
    callbackURL: "http://localhost:3000/auth/fb/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
  }
));

//teste