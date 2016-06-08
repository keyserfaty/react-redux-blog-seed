import React, { PropTypes } from 'react';

const SingleEntry = ({ title, content }) => (
  <div className="box">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

SingleEntry.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SingleEntry;
