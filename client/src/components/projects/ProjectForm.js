import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../../utils/validateEmails';

class ProjectForm extends Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="newproject_form-input--error">{error}</div>
      );
    }
  }

  renderInput = ({input, label, type, meta}) => {
    return (
      <div className="newproject_form-input">
        <label className="newproject_form-input--label">{label}</label><br></br>
        <input {...input} autoComplete="off" className="newproject_form-input--input" type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (values, dispatch) => {
    this.props.onProjectSubmit();
  }

  render() {
    return (
      <div>
        <h2>Create a New Project</h2>
        <form className="newproject_form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field type="text" name="projectTitle" component={this.renderInput} label="Project Title:" />
          <Field type="text" name="emailSubject" component={this.renderInput} label="Email Subject:" />
          <Field type="text" name="emailBody" component={this.renderInput} label="Email Body:" />
          <Field type="text" name="projectGroup" component={this.renderInput} label="Group List:" />
          <Field type="date" name="projectDue" component={this.renderInput} label="Due Date:" />
          <div>
            <Link className="newproject_form-cancel" to="/dashboard">
              Cancel
            </Link>
            <button className="newproject_form-submit" type="submit">Get Started</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  const currentDate = new Date();
  const userDate = new Date(values.projectDue);

  if (!values.projectTitle) {
    errors.projectTitle = 'This project requires a Title.';
  }
  if (!values.emailSubject) {
    errors.emailSubject = 'Subject is requires for Email.';
  }
  if (!values.emailBody) {
    errors.emailBody = 'Write a message for the Email!';
  }
  errors.projectGroup = validateEmails(values.projectGroup || '');
  if (!values.projectGroup) {
    errors.projectGroup = 'Add Members to your Group Project.';
  }
  if (!values.projectDue) {
    errors.projectDue = 'Add a deadline to your Project.';
  }
  if (userDate <= currentDate) {
    errors.projectDue = 'Please pick a valid deadline for your Project!';
  }
  return errors;
};

export default reduxForm({
  form: 'createProject',
  validate: validate,
  destroyOnUnmount: false
})(ProjectForm);
