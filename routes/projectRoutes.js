const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Mailer = require('../services/mailer');
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
      objectives: [],
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

  app.post('/api/projects/webhooks', (req, res) => {
    const p = new Path('/api/projects/:projectId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email,
            projectId: match.projectId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy('email', 'projectId')
      .each(({ projectId, email, choice }) => {
        Project.updateOne({
          _id: projectId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        }, {
          $set: { 'recipients.$.responded': true }
        }).exec();
      })
      .value();

    res.send({});
  });

  app.get('/api/projects', requireLogin, async (req, res) => {
    const projects = await Project.find({ _user: req.user.id });

    res.send(projects);
  });

  // ROUTE HANDLEs PROJECT SECTIONS
  app.post('/api/projects/addsection', (req, res) => {
    const { title, description, lead, id } = req.body;

    Project.findById(id, function (err, project) {
      project.objectives.addToSet({
        title:  title,
        description:  description,
        lead: lead
      });
      project.save(function (err) {
        if (err) return handleError(err);
        console.log('Success!');
      });
      res.send(project);
    });
  });

};
