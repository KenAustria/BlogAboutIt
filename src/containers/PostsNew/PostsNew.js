import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createPost } from "../../actions/index";
import styles from './PostsNew.module.css';

class PostsNew extends Component {
  renderField(field) {
		return (
			<div className={styles.form_group_field}>
				<label>{field.label}</label>
				<input type="text" className={styles.form_input} {...field.input} />
				<div className={styles.invalid_feedback}>
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
		);
	}

  renderFieldArea(field) {
		return (
			<div className={styles.form_group_field}>
				<label>{field.label}</label>
				<textarea type="text" className={styles.form_input} {...field.input} />
				<div className={styles.invalid_feedback}>
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
		);
	}

  onSubmit(values) {
		this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.new_group}>
        <div className={styles.new_title}>Create New</div>
        <div className={styles.form_group}>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field label="Title" name="title" component={this.renderField} />
            <Field label="Categories" name="categories" component={this.renderField} />
            <Field label="Content" name="content" component={this.renderFieldArea} />
						<div className={styles.new_buttons}>
							<Link to="/" className={styles.remove_link}>
              	<Button variant="outlined" color="secondary">Cancel</Button>
            	</Link>
							<div className={styles.divider}></div>
            	<Button variant="outlined" color="primary" type="submit">Submit</Button>
						</div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(null, { createPost })(PostsNew)
);
