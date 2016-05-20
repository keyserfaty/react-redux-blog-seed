import React from 'react';

export const LargeTextarea = ({ name, value, placeholder, onChange }) => (
  <div className="form-group">
    <div className="col-sm-12">
      <textarea
        id="txtarea1"
        rows="20"
        cols="50"
        className="form-control1"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  </div>
);
