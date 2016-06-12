import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SingleEntry from './SingleEntry';

let Entries = ({ entries }) => (
  <span>
    { entries.map(entry =>
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
