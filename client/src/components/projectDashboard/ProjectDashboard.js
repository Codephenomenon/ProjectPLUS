import React,  { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import DashForm from './DashForm.js';

class ProjectDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addSection: false,
    };

    this.renderAdd = this.renderAdd.bind(this);
  }

  renderObjectives() {
    return this.props.activeProject.objectives.map(objective => {
      return (
        <li key={objective._id}>
          <div className="projectdash_objectives-panel-list--item">
            <div>
              <h4 className="projectdash_objectives-panel-list--item-title">{objective.title}</h4>
              <p className="projectdash_objectives-panel-list--item-leader">{objective.lead}</p>
            </div>
            <p className="projectdash_objectives-panel-list--item-description">{objective.description}</p>
          </div>
        </li>
      );
    });
  }

  renderAdd() {
    this.setState({ addSection: !this.addSection });
  }

  render() {
    return (
      <div className="projectdash">
        <div className="projectdash_objectives">
          <div className="projectdash_objectives-header">
            <div className="projectdash_objectives-header-top">
              <h2>Objectives - {this.props.activeProject.title}</h2>
            </div>
            <div className="projectdash_objectives-header-bottom">
              <p>{this.props.activeProject.subject}</p>
              <p>Deadline: {this.props.activeProject.dueDate}</p>
            </div>
          </div>
          <div className="projectdash_objectives-panel">
            <ul className="projectdash_objectives-panel-list">
              { this.renderObjectives() }
            </ul>
            { this.state.addSection ? <DashForm /> : <button className="projectdash_objectives-button" onClick={this.renderAdd}>&#43;</button> }
          </div>
        </div>
        <div className="projectdash_settings">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeProject: state.activeProject };
}

const wrappedForm = reduxForm({
  form: 'projectSection'
})(ProjectDashboard);

export default connect(mapStateToProps)(wrappedForm);
