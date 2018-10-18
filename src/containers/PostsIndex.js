import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { bindActionCreators } from "redux";
import _ from "lodash";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.post, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <li className="list-group">{this.renderPosts()}</li>
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
