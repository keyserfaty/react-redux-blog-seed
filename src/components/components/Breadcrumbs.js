import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const BreadCrumbs = ({ links }) => (
  <span className="breadcrumbs">
    { links.map((link, i) => (
      <span key={i}>
        <Link to={link.href}>{link.name}</Link>
      </span>
    ))}
  </span>
);

BreadCrumbs.propTypes = {
  links: PropTypes.array.isRequired,
};

export default BreadCrumbs;
