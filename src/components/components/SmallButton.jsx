import React from 'react';

export const SmallButton = ({ value, onClick }) => (
  <input
    type="submit"
    className="buttonClass"
    value={value}
    onClick={onClick}
  />
);
