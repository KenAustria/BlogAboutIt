import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
	componentDidMount() {
		const id = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		const post = this.props;
		if (!post) {
			return <div>Loading..</div>
		}
		return (
			<div>
			 <h1>Title {post.title}</h1>
			 <h3>Category {post.category}</h3>
			 <h3>Content {post.content}</h3>
			</div>
		 );
 	}
}

function mapStateToProps({posts}, ownProps) {
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);