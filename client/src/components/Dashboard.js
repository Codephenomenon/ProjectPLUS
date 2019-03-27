import React, { Component } from 'react';
import ProjectsBox from './ProjectsBox';
import { connect } from 'react-redux';

class Dashboard extends Component {

  componentDidMount() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="dashboard">
        <ProjectsBox />
        <div className="dashboard_contactsbox"></div>
        <div className="dashboard_alertsbox"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
