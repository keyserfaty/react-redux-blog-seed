import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Banner } from '../components/Banner.jsx';
import { SingleEntry } from './SingleEntry';

const EntriesComponent = ({ entries }) => {
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
    <div id="page-wrapper" className="gray-bg dashbard-1">
      <div className="content-main">
        <Banner links={breadCrumbsLinks} />
        { _.map(entries, entry =>
          <SingleEntry title={entry.title} content={entry.content} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  entries: state.entities.posts.entries,
});

export const Entries = connect(mapStateToProps)(EntriesComponent);
