import React from 'react';
import { BreadCrumbs } from './Breadcrumbs';

export const Banner = ({ links }) => (
  <div className="banner">
    <BreadCrumbs links={links} />
  </div>
);
