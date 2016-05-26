import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Post } from './Post'
import { fetchPostEntry } from '../../state/entities/posts/actions'

class PostContainerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }

    this.onPublishClick = this.onPublishClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onPublishClick() {
    const { dispatch } = this.props
    dispatch(fetchPostEntry(this.state))
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const breadCrumbsLinks = [
      {
        name: 'All Posts',
        href: '/entries'
      }, {
        name: 'Add New Post',
        href: '/post'
      }
    ]

    return (
      <Post {...this} breadCrumbsLinks={breadCrumbsLinks} />
    )
  }
}

export const PostContainer = connect()(PostContainerComponent)
