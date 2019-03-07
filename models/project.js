const mongoose = require('mongoose');
const { Schema } = mongoose;
const groupMemberSchema = require('./groupMember');

const projectSchema = new Schema({
  title: String,
  description: String,
  dateCreated: Date,
  dueDate: Date,
  complete: { type: Boolean, default: false },
  groupMembers: [groupMemberSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'user' }
});

mongoose.model('projects', projectSchema);
