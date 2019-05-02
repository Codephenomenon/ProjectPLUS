const mongoose = require('mongoose');
const { Schema } = mongoose;
const groupMemberSchema = require('./groupMember');

const projectObjectiveSchema = new Schema({
  title: String,
  description: String,
  lead: String,
});

module.exports = projectObjectiveSchema;
