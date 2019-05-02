import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, reset, Field } from 'redux-form';
import { addSection } from '../../actions/index.js';

class DashForm extends Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="dashboardform_form-input--error">{error}</div>
      );
    }
  }

  renderInput = ({input, label, type, meta}) => {
    return (
      <div className="dashboardform_form-input">
        <label className="dashboardform_form-input--label">{label}</label><br></br>
        <input {...input} autoComplete="off" className="dashboardform_form-input--input" type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (values, dispatch) => {
    const sectionValues = {
      title: values.sectionTitle,
      description: values.sectionDescription,
      lead: values.sectionLead,
      id: this.props.activeProject._id
    };
    let id = this.props.activeProject._id;
    this.props.addSection(sectionValues);
    dispatch(reset("projectSection"));
  }

  render() {
    return (
      <div className="dashboardform">
        <form className="dashboardform_form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field type="text" name="sectionTitle" component={this.renderInput} label="Section Title:" />
          <Field type="text" name="sectionLead" component={this.renderInput} label="Team Member:">
          </Field>
          <Field type="textarea" name="sectionDescription" component={this.renderInput} label="Section Description:" />
          <button className="dashboardform_form-submit" type="submit">+</button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.sectionTitle) {
    errors.sectionTitle = 'This Section requires a Title.';
  }
  if (!values.sectionLead) {
    errors.sectionLead = 'Sections require a Team Member.';
  }
  if (!values.sectionDescription) {
    errors.sectionDescription = 'Describe what needs to be completed.';
  }

  return errors;
};

const mapStateToProps = (state) => {
  return { activeProject: state.activeProject };
}

const wrappedForm = reduxForm({
  form: 'projectSection',
  validate: validate,
  destroyOnUnmount: false
})(DashForm);


export default connect(mapStateToProps, { addSection })(wrappedForm);
