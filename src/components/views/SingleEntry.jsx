import React from 'react';
import { TitleH3 } from '../components/TitleH3.jsx';

export const SingleEntry = ({ title, content }) => (
  <div className="grid-form">
    <div className="grid-form1">
      <TitleH3 title={title} />
      <p>{content}</p>
    </div>
  </div>
);
