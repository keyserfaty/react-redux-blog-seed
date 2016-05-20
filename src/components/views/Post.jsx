import React from 'react';
import { Banner } from '../components/Banner.jsx';
import { TitleH3 } from '../components/TitleH3.jsx';
import { SmallInput } from '../components/SmallInput.jsx';
import { LargeTextarea } from '../components/LargeTextarea.jsx';
import { SmallButton } from '../components/SmallButton.jsx';

export const Post = (that) => {
  const { onPublishClick, onChange, breadCrumbsLinks } = that;
  const { title, content } = that.state;

  return (
    <div id="page-wrapper" className="gray-bg dashbard-1">
      <div className="content-main">
        <Banner links={breadCrumbsLinks} />
        <div className="grid-form">
          <div className="grid-form1">
            <TitleH3 title="Add a new Post" />
            <div className="form-horizontal">
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
    </div>
  );
};
