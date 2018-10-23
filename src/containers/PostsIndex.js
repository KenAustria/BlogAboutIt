import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _ from "lodash";

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts = () => {
		return _.map(this.props.posts, post => {
			return (
				<Link to={`/posts/${post.id}`}>
					<List>
						<ListItem key={post.id}>
							<ListItemText primary={post.title}/>
						</ListItem>
					</List>
				</Link>
			);
		});
	};

	render() {
		return (
			<div className="index_group">
				<div className="index_header">
					<div className="index_title">Blog About It</div>
					<div className="index_description">Technology Enthusiast Community</div>
						<Button variant="outlined" color="primary">
							<Link to="/posts/new" className="add_button">Add Post</Link>
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
