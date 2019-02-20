const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const flash = require('express-flash-messages'); 
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeyA, keys.cookieKeyB, keys.cookieKeyC]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/authUser')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
