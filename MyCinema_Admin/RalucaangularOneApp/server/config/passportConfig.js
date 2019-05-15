//const passport = require('passport');
//const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Admin = mongoose.model('Admin');

/*passport.use(
    new localStrategy({},
        (username, password, done) => {
            User.findOne({},
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);*/
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(userName, password, done) {
    Admin.findOne({ userName: userName }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));