import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export const BreadCrumbs = ({ links }) => (
  <h2>
    { _.map(links, (link, i) => {
      if (i === links.length - 1) {
        return (
          <span key={i}>
            {link.name}
          </span>
        );
      }
      return (
        <span key={i}>
          <Link to={link.href}>{link.name}</Link>
        </span>
      );
    })}
  </h2>
);
