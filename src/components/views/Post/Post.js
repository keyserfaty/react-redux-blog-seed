import React, { PropTypes } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import SmallInput from '../../components/SmallInput';
import LargeTextarea from '../../components/LargeTextarea';
import SmallButton from '../../components/SmallButton';

const Post = ({ onPublishClick, onChange, breadCrumbsLinks, title, content }) => (
  <div className="wrapper">
    <div className="box-container">
      <div className="box">
        <BreadCrumbs links={breadCrumbsLinks} />
      </div>
      <div className="box">
        <h3>Add a new Post</h3>
        <div className="box-inner">
          <SmallInput
            placeholder="Add a title..."
            name="title"
            value={title}
            onChange={onChange}
          />

          <LargeTextarea
            placeholder="Add some content..."
            name="content"
            value={content}
            onChange={onChange}
          />

          <SmallButton
            value="Publish"
            onClick={onPublishClick}
          />
        </div>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  onPublishClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  breadCrumbsLinks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
