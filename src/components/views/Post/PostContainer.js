import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import { fetchPostEntry } from '../../../state/entities/posts/actions';

class PostContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

    this.onPublishClick = this.onPublishClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onPublishClick() {
    const { onPublishClick } = this.props;
    onPublishClick(this.state);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Post {...this} {...this.state} />
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onPublishClick: state => dispatch(fetchPostEntry(state))
});

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostContainerComponent);
