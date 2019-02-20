import React,  { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="header_login item"><a href="/login">Login</a></div>
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
