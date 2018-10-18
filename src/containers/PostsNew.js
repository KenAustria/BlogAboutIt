import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    const { meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />  
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  validate(values) {
    let errors = {};

    if(!values.title) {
      errors.title = "Enter a title";
    }
    if(!values.categories) {
      errors.categories = "Enter a category";
    }
    if(!values.content) {
      errors.content = "Enter content";
    }

    return errors;
  }

  onFormSubmit = (values) => {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="tags" component={this.renderField} />
        <Field label="Content" name="content" component={this.renderField} />
        <Link to="/">Cancel</Link>
        <button>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
