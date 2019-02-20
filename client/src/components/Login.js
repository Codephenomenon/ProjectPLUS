import React,  { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login_panel">
          <object className="login_panel-logo" type="image/svg+xml" data="images/plus_logo.svg" height="50" width="50">
            <img src="images/plus_logo.svg" alt="ProjectPLUS Logo"></img>
          </object>
          <div className="login_panel-subpanel">
            <span className="login_panel-subpanel--link">Sign Up</span>
            <span className="login_panel-subpanel--link facebook">Continue with Facebook</span>
            <span className="login_panel-subpanel--link google">Continue with Google</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
