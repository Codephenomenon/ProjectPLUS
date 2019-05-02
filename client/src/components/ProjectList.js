import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, activeProject } from '../actions';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.selectProject = this.selectProject.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  selectProject(data) {
    this.props.activeProject(data);
  }

  renderProjects() {
    return this.props.projects.reverse().map(project => {
      return (
        <li key={project._id} onClick={() => this.selectProject(project)}>
          <Link to={`/projectdash/${project._id}`}>
          <div className="projectsbox_list-item">
            <div className="projectsbox_list-item-block">
              <h2 className="projectsbox_list-item-block--title">{project.title}</h2>
              <h3 className="projectsbox_list-item-block--subject">{project.subject}</h3>
            </div>
            <div className="projectsbox_list-item-block">
              <p className="projectsbox_list-item-block--body">{project.body}</p>
            </div>
            <div className="projectsbox_list-item-block">
              <p className="projectsbox_list-item-block--date">Created: {new Date(project.dateCreated).toLocaleDateString()}</p>
              <p className="projectsbox_list-item-block--dueInfo">Completed? <span>{project.complete ? 'Complete' : 'Unfinished'}</span></p>
            </div>
          </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="projectsbox_list">
        {this.renderProjects()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects, activeProject })(ProjectList);
