import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
      <label>{field.label}</label>
      <input
        type="text"
        className="form-control"
        {...field.input}
      />
      {field.meta.error}
      </div>
    );
  }

// display validation messages inside PostsNew component with field.meta.error
// meta.error property is automatically added to the field object from our validate function 
// reference to have error show up


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
        <button>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
