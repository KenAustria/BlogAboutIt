import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { createPost } from "../actions/index";
import { bindActionCreators } from "redux";

class PostsNew extends Component {
	renderField(field) {
		const { meta: {touched, error}} = field;
		const className = `form_group_field ${touched && error ? 'invalid_feedback' : ''}`;

		return (
			<div className={className}>
				<div className="new_labels">
					<label>{field.label}</label>
				</div>
				<input
					type="text"
					className="form_input"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderFieldArea(field) {
		const { meta: {touched, error}} = field;
		const className = `form_group_field ${touched && error ? 'invalid_feedback' : ''}`;

		return (
			<div className={className}>
				<div className="new_labels">
					<label>{field.label}</label>
				</div>
				<textarea
					type="text"
					className="form_input"
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
			<div className="new_group">
				<div className="new_title">Create New</div>
					<div className="form_group">
						<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
							<Field label="Title" name="title" component={this.renderField} />
							<Field label="Categories" name="categories" component={this.renderField} />
							<Field label="Content" name="content" component={this.renderFieldArea} />
						</form>
						<div className="new_buttons">
							<Link to="/" className="remove_link">
								<Button variant="outlined" color="secondary">Cancel</Button>
							</Link>
							<div className="divider"></div>
							<Link to="/" className="remove_link">
								<Button variant="outlined" color="primary" type="submit">
									Submit
								</Button>
							</Link>
							
						</div>
					</div>
			</div>
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
