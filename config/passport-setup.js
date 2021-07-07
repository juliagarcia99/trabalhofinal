const passport = require('passport');
const FacebookStrategy = require('passport-facebook');

passport.use(new FacebookStrategy({
    clientID: 🤫,
    clientSecret: 🤫,
    callbackURL: "http://localhost:3000/auth/fb/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

//teste