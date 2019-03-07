const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupMemberSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
  name: String
});

module.exports = groupMemberSchema;
