import React, { Component } from 'react';
import ProjectsBox from './ProjectsBox';

class Dashboard extends Component {

  render () {
    return (
      <div className="dashboard">
        <ProjectsBox/>
        <div className="dashboard_contactsbox"></div>
        <div className="dashboard_alertsbox"></div>
      </div>
    );
  }
}

export default Dashboard;
