import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import _ from "lodash";

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts = () => {
		return _.map(this.props.posts, post => {
			return (
				<Link to={`/posts/${post.id}`} className="remove_link">
					<ul key={post.id} className="list_item_text">
						{post.title}
					</ul>
				</Link>
			);
		});
	};

	render() {
		return (
			<div className="index_group">
				<div className="index_title">Blog About It</div>
				<div className="index_description">Technology Enthusiast Community</div>
				{this.renderPosts()}
				<div className="index_footer">
					<Button variant="outlined" className="add_button">
						<Link to="/posts/new" className="remove_link">Add Post</Link>
					</Button>	
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsIndex);
