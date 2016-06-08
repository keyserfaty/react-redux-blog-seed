import React, { PropTypes } from 'react';

const SmallInput = ({ name, value, placeholder, onChange }) => (
  <input
    type="text"
    rows="3"
    className="small-input"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

SmallInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SmallInput;
