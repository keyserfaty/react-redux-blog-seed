import React from 'react'

export const SmallInput = ({ name, value, placeholder, onChange }) => (
  <input
    type='text'
    rows='3'
    className='small-input'
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)
