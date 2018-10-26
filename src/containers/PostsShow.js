import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	onDelete = () => {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push("/");
		});
	}

	render() {
		const { post } = this.props;
		if (!post) {
			return <div>Loading..</div>
		}
		return (
			<div className="show_group">
			 <div className="show_title">
			 	<h1>{post.title}</h1>
			 </div>
			 <div className="show_categories">
			 	<h4>{post.categories}</h4>
			 </div>
			 <div className="show_content">
			 	<p>Content {post.content}</p>	 
			 </div>
			 <div className="show_buttons">
				<Link to="/" className="remove_link">
					<Button variant="outlined" color="primary">
						Back To Index
					</Button>
				</Link>
				<div className="divider"></div>
				<Button onClick={this.onDelete} variant="outlined" color="secondary">
					Delete
				</Button>
			 </div>
			</div>
		 );
 	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);