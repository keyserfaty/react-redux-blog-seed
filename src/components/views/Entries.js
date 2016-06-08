import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { SingleEntry } from './SingleEntry';
import { BreadCrumbs } from '../components/Breadcrumbs';

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
    <div className="wrapper">
      <div className="box-container">
        <div className="box">
          <BreadCrumbs links={breadCrumbsLinks} />
        </div>
        { map(entries, entry =>
          <SingleEntry title={entry.title} key={`${entry.title}_id`} content={entry.content} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  entries: state.entities.posts.entries,
});

export const Entries = connect(mapStateToProps)(EntriesComponent);
