import React from 'react';

export const SmallButton = ({ value, onClick }) => (
  <button
    type="submit"
    className="small-button"
    onClick={onClick}
  >{value}</button>
);
