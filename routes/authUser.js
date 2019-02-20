const passport = require('passport');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const flash = require('express-flash-messages');
const User = mongoose.model('users');

module.exports = (app) => {

  app.post('/register/new', function(req, res) {
    const name = req.body.firstName;
    const email = req.body.email;
    const password = req.body.password;

    let newUser = new User({
      name: name,
      email: email,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) {
          console.log(errpr);
          return;
        }
        newUser.password = hash;
        newUser.save(function(err) {
          if(err) {
            console.log(err);
            return;
          } else {
            req.flash('success', 'You have registered for ProjectPLUS!');
          }
        })
      });
    });


  });

};
