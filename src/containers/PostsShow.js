import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount() {
		if (!this.props.post) {
			const id = this.props.match.params;
			this.props.fetchPost(id);
		}
	}

	onDelete() {
		const { id } = this.props.match.params;
		this.props.deletePost(id)
			.then(() => {
				this.props.history.push("/");
			});
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
			 <Link to="/">Back To Index</Link>
			 <button onClick={this.onDelete}>Delete</button>
			</div>
		 );
 	}
}

function mapStateToProps({posts}, ownProps) {
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);