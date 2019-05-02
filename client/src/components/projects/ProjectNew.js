import React,  { Component } from 'react';
import ProjectForm from './ProjectForm';
import FormReview from './FormReview';
import { reduxForm } from 'redux-form';

class ProjectNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectReview: false
    };
  }

  renderContent() {
    if (this.state.projectReview) {
      return (
        <FormReview
          onCancel={() => this.setState({ projectReview: false })}
        />
      );
    } else {
      return <ProjectForm onProjectSubmit={() => this.setState({ projectReview: true })} />;
    }
  }

  render() {
    return (
      <div className="newproject">
        { this.renderContent() }
      </div>
    );
  }
}

export default reduxForm({
  form: 'createProject'
})(ProjectNew);
