import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import { fetchPostEntry } from '../../../state/entities/posts/actions';

class PostContainerComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  onPublishClick() {
    const { fetchPost } = this.props;
    fetchPost(this.state);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, content } = this.state
    return (
      <Post
        onChange={this.onChange.bind(this)}
        onPublishClick={this.onPublishClick.bind(this)}
        title={title}
        content={content}
      />
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchPost: (post) => {
    dispatch(fetchPostEntry(post))
  }
})

export const PostContainer = connect(null, mapDispatchToProps)(PostContainerComponent);
