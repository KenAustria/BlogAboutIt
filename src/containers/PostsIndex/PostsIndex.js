import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/index";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import _ from "lodash";
import styles from './PostsIndex.module.css';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts = () => {
		return _.map(this.props.posts, post => {
			return (
				<Link to={`/posts/${post.id}`} className={styles.list_item}>
					<ul key={post.id} className={styles.list_item_text}>
						{post.title}
					</ul>
				</Link>
			);
		});
	};

	render() {
		return (
			<div className={styles.index_group}>
			<div className={styles.index_title}>Blog About It</div>
				<div className={styles.index_description}>Technology Enthusiast Community</div>
				{this.renderPosts()}
				<div className={styles.index_footer}>
				<Link to="/posts/new" className={styles.remove_link}>
					<Button variant="outlined" className={styles.add_button} color="primary">
						ADD POST
					</Button>
				</Link>
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
