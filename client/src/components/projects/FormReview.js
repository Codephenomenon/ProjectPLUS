import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const FormReview = ({ onCancel, formValues, createProject, history }) => {
  return (
    <div>
      <h2>Review new Project:</h2>
      <div className="projectReview">
        <div className="projectReview_section">
          <label className="projectReview_section--label">Title:</label>
          <div className="projectReview_section--content">{formValues.projectTitle}</div>
        </div>
        <div className="projectReview_section">
          <label className="projectReview_section--label">Email Subject:</label>
          <div className="projectReview_section--content">{formValues.emailSubject}</div>
        </div>
        <div className="projectReview_section">
          <label className="projectReview_section--label">Email Body:</label>
          <div className="projectReview_section--content">{formValues.emailBody}</div>
        </div>
        <div className="projectReview_section">
          <label className="projectReview_section--label">Group Members:</label>
          <div className="projectReview_section--content">{formValues.projectGroup}</div>
        </div>
        <div className="projectReview_section">
          <label className="projectReview_section--label">Due Date:</label>
          <div className="projectReview_section--content">{formValues.projectDue}</div>
        </div>
        <div className="projectReview_section">
          <button className="projectReview_section--cancel" onClick={onCancel}>Back</button>
          <button onClick={() => createProject(formValues, history)} className="projectReview_section--submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.createProject.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(FormReview));
