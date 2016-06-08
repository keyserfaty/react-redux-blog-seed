import React, { PropTypes } from 'react';

const LargeTextarea = ({ name, value, placeholder, onChange }) => (
  <textarea
    rows="20"
    cols="50"
    className="large-textarea"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

LargeTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LargeTextarea;
