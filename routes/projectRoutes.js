const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const projectTemplate = require('../services/emailTemplates/projectMemberTemplate');

const Project = mongoose.model('projects');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, (req, res) => {
    const { title, description, dueDate, complete, blocks, groupMembers } = req.body;

    const project = new Project({
      title: title,
      description: description,
      dateCreated: Date.now(),
      dueDate: dueDate,
      complete: false,
      groupMembers: groupMembers.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id
    });

    // send emails to group members
    const mailer = new Mailer(project, projectTemplate(project));
  });
};
