import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import SingleEntry from './SingleEntry';

let Entries = ({ entries }) => (
  <span>
    { map(entries, entry =>
      <SingleEntry title={entry.title} key={`${entry.title}_id`} content={entry.content} />
    )}
  </span>
);

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  entries: state.entities.posts.entries,
});

Entries = connect(mapStateToProps)(Entries);

export default Entries;
