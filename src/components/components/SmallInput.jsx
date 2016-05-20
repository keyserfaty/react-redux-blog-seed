import React from 'react';

export const SmallInput = ({ name, value, placeholder, onChange }) => (
  <div className="form-group">
    <div className="col-sm-12">
      <input
        id="smallinput"
        type="text"
        rows="3"
        className="form-control1 input-sm"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  </div>
);
