import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Login />
        );
      default:
        return (
          <div className="header_login item"><a href="/api/logout">Logout</a></div>
        );
    }
  }

  render() {
    return (
      <header className="header">
        <object className="header_logo" type="image/svg+xml" data="images/plus_text_logo.svg" height="50" width="50">
          <img src="images/plus_text_logo.svg" alt="ProjectPLUS Logo"></img>
        </object>
        {this.renderLogin()}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
