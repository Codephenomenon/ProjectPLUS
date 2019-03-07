import React, { Component } from 'react';

class ProjectsBox extends Component {

  render () {
    return (
      <div className="projectsbox">
        <div className="projectsbox_header">
          <h1 className="title">Projects</h1>
          <div className="projectsbox_header-button"><a href="#">Create<i>+</i></a></div>
        </div>
        <ul className="projectsbox_list">

        </ul>
      </div>
    );
  }
}

export default ProjectsBox;
