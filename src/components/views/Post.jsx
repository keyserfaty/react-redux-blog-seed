import React from 'react';
import { Banner } from '../components/Banner.jsx';
import { TitleH3 } from '../components/TitleH3.jsx';
import { SmallInput } from '../components/SmallInput.jsx';
import { LargeTextarea } from '../components/LargeTextarea.jsx';
import { SmallButton } from '../components/SmallButton.jsx';

export const Post = () => {
  const breadCrumbsLinks = [
    {
      name: 'All Posts',
      href: '/entries',
    }, {
      name: 'Add New Post',
      href: '/post',
    },
  ];

  return (
    <div>
      <div id="page-wrapper" className="gray-bg dashbard-1">
        <div className="content-main">
          <Banner links={breadCrumbsLinks} />
          <div className="grid-form">
            <div className="grid-form1">
              <TitleH3 title="Add a new Post" />
              <form className="form-horizontal">
                <SmallInput placeholder="Add a title..." />
                <LargeTextarea placeholder="Add some content..." />
                <SmallButton value="Publish" onClick='' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
