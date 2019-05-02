import React, { Component } from 'react';
import ProjectsBox from './ProjectsBox';
import { connect } from 'react-redux';

class Dashboard extends Component {
  componentDidUpdate() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="dashboard">
        <ProjectsBox />
        <div className="dashboard_contactsbox">
          <div className="dashboard_contactsbox-image">
            <img src="./images/visual_flow.jpg" alt="visual workflow" />
          </div>
          <div className="dashboard_contactsbox-content">
            <h2>Getting Started</h2>
            <p>Create a project by selecting the create+ button and fill out the required information to invite group members by email. Created projects will be listed in the projects panel, click on a project to view its details.</p>
            <p>Inside the project details panel add objectives to organize and direct your team members.</p>
          </div>
        </div>
        <div className="dashboard_alertsbox"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
