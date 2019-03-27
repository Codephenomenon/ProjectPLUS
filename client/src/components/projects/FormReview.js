import React from 'react';
import { connect } from 'react-redux';

const FormReview = ({ onCancel, formValues }) => {
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
          <button onClick={onCancel}>Back</button>
          <button>Continue</button>
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

export default connect(mapStateToProps)(FormReview);
