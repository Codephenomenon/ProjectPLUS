import React,  { Component } from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions/index.js'

class Landing extends Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="landing_panel-row--error">{error}</div>
      );
    }
  }

  renderInput = ({input, label, type, meta}) => {
    return (
      <div className="landing_panel-row--div">
        <label className="landing_panel-row--label">{label}</label><br></br>
        <input {...input} autoComplete="off" className="landing_panel-row--input" type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (values, dispatch) => {
    const userData = {
      firstName: values.firstName,
      email: values.email,
      password: values.password
    }
    this.props.createUser(userData);
    dispatch(reset("createUser"));
  }

  render() {
    return (
      <div className="landing">
        <div className="landing_panel">
          <div className="landing_panel-row">
            <object className="landing_panel-row--logo" type="image/svg+xml" data="images/plus_logo.svg" height="50" width="50">
              <img src="images/plus_logo.svg" alt="ProjectPLUS Logo"></img>
            </object>
            <div className="landing_panel-row--intro">
              <span>Welcome to Project Plus,</span><br></br>
              Manage group projects is now a breeze with Project Plus, sign up for an account and
              make your next project easier to coordinate for FREE. This application is a project by
              Daniel Clayton, find more of my work here.
            </div>
          </div>
          <div className="landing_panel-row landing_panel-row-two">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <h1>Sign Up</h1>
              <Field name="firstName" component={this.renderInput} label="Username:" />
              <Field name="email" component={this.renderInput} label="Email:" />
              <Field name="password" type="password" component={this.renderInput} label="Password:" />
              <Field name="confirmPassword" type="password" component={this.renderInput} label="Confirm password:" />
              <button type="submit" className="landing_panel-row--btn">Submit</button>
            </form>
            <div className="landing_panel-row-subpanel">
              <span className="landing_panel-row-subpanel--link facebook"><a href="/auth/facebook">Continue with Facebook</a></span>
              <span className="landing_panel-row-subpanel--link google"><a href="/auth/google">Continue with Google</a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required.';
  }
  if (!values.email) {
    errors.email = 'Email is required.';
  }
  if (!values.password) {
    errors.password = 'Password is required.';
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords entered do not match.';
  }
  return errors;
};

const wrappedForm = reduxForm({
  form: 'createUser',
  validate: validate
})(Landing);

export default connect(null, { createUser })(wrappedForm);
