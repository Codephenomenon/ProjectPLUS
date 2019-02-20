const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
  password: String
});

mongoose.model('users', userSchema);
