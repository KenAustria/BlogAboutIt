import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createPost } from "../actions/index";
import { bindActionCreators } from "redux";

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

	onSubmit(values) {
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<Field label="Title for Review" name="title" component={this.renderField} />
				<Field label="Categories" name="categories" component={this.renderField} />
				<Field label="Review Content" name="content" component={this.renderField} />
				<Link to="/">Cancel</Link>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Enter a category';
	}
	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createPost }, dispatch);
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, mapDispatchToProps)(PostsNew)
);
