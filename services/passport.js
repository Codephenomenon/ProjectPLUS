const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existUser = await User.findOne({ googleId: profile.id });
    if (existUser) {
      done(null, existUser);
    } else {
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  })
);

passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: '/auth/facebook/callback',
  proxy: true
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
  })
);

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      name: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      bcrypt.compare(password, user.password, function(err, match) {
        if (err) {
          console.log(err);
          throw err;
        }
        if (match) {
          console.log('is a match');
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }
));
