import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import SingleEntry from './SingleEntry';
import BreadCrumbs from '../../components/BreadCrumbs';

let Entries = ({ entries }) => {
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

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  entries: state.entities.posts.entries,
});

Entries = connect(mapStateToProps)(Entries);

export default Entries;
