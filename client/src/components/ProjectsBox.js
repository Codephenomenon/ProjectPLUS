import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';

class ProjectsBox extends Component {

  render () {
    return (
      <div className="projectsbox">
        <div className="projectsbox_header">
          <h1 className="title">Projects</h1>
          <div className="projectsbox_header-button">
            <Link to="/projects/new">Create<i>+</i></Link>
            </div>
        </div>
        <ProjectList />
      </div>
    );
  }
}

export default ProjectsBox;
