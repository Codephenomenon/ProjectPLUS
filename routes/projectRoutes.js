const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const projectTemplate = require('../services/emailTemplates/projectMemberTemplate');

const Project = mongoose.model('projects');

module.exports = (app) => {
  app.post('/api/projects', requireLogin, (req, res) => {
    const { title, subject, body, dueDate, recipients } = req.body;

    const project = new Project({
      title: title,
      subject: subject,
      body: body,
      dateCreated: Date.now(),
      dueDate: dueDate,
      complete: false,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id
    });

    // send emails to group members
    try {
      const mailer = new Mailer(project, projectTemplate(project));

      mailer.send();
      project.save();
      const user = req.user.save();

      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }

  });
};
