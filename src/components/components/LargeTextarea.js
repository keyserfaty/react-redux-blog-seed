import React from 'react'

export const LargeTextarea = ({ name, value, placeholder, onChange }) => (
  <textarea
    rows='20'
    cols='50'
    className='large-textarea'
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)
