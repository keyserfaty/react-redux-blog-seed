import React, { PropTypes } from 'react';

const SmallButton = ({ value, onClick }) => (
  <button
    type="submit"
    className="small-button"
    onClick={onClick}
  >{value}</button>
);

SmallButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SmallButton;
