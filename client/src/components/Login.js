import React,  { Component } from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../actions/index.js'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLogin: false,
      redirectPage: false
    };
    this.displayLoginForm = this.displayLoginForm.bind(this);
  }


  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="">{error}</div>
      );
    }
  }

  renderInput = ({input, label, type, meta}) => {
    return (
      <div className="header_login-panel--input">
        <label className="">{label}</label><br></br>
        <input {...input} autoComplete="off" className="" type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  displayLoginForm() {
    this.setState({
      displayLogin: !this.state.displayLogin
    });
  }

  onSubmit = (values, dispatch) => {
    const user = {
      username: values.userName,
      password: values.password
    }
    this.props.authUser(user);
    dispatch(reset("authUser"));
    this.setState({ redirectPage: true });
  }

  renderLoginForm() {
    if (this.state.displayLogin === true && this.state.redirectPage === false) {
      return (
        <div className="header_login-panel">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="userName" component={this.renderInput} label="Username:" />
            <Field name="password" type="password" component={this.renderInput} label="Password:" />
            <button type="submit" className="header_login-panel--btn">Submit</button>
          </form>
        </div>
      );
    }
    if (this.state.redirectPage === true) {
      return (
        <Redirect to="/dashboard"/>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="header_login item" onClick={this.displayLoginForm}>
          Login
        </div>
        {
          this.renderLoginForm()
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Username is required.';
  }
  if (!values.password) {
    errors.password = 'Password is required.';
  }
  return errors;
};

const wrappedForm = reduxForm({
  form: 'authUser',
  validate: validate
})(Login);

export default connect(mapStateToProps, { authUser })(wrappedForm);
