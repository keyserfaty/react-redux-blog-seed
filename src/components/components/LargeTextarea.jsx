import React from 'react';

export const LargeTextarea = ({ name, value, placeholder, onChange }) => (
  <div className="form-group">
    <div className="col-sm-12">
      <textarea
        rows="20"
        cols="50"
        className="form-control1"
        name={name}
        value={value}
        value={value}
        placeholder={placeholder}
      />
    </div>
  </div>
);
