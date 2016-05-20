import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Banner } from '../components/Banner.jsx';
import { SingleEntry } from './SingleEntry';

const EntriesComponent = ({ entries, breadCrumbsLinks }) => (
  <div id="page-wrapper" className="gray-bg dashbard-1">
    <div className="content-main">
      <Banner links={breadCrumbsLinks} />
      { _.map(entries, entry =>
        <SingleEntry title={entry.title} content={entry.content} />
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  entries: state.entities.entries,
});

export const Entries = connect(mapStateToProps)(EntriesComponent);