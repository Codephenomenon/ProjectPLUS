const mongoose = require('mongoose');
const { Schema } = mongoose;
const groupMemberSchema = require('./groupMember');
const projectObjectiveSchema = require('./projectObjective');

const projectSchema = new Schema({
  title: String,
  subject: String,
  body: String,
  dateCreated: Date,
  dueDate: String,
  complete: { type: Boolean, default: false },
  recipients: [groupMemberSchema],
  objectives: [projectObjectiveSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'user' }
});

mongoose.model('projects', projectSchema);
