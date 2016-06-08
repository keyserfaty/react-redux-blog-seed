import React, { PropTypes, Component } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static breadCrumbsLinks = [
    {
      name: 'All Posts',
      href: '/entries',
    }, {
      name: 'Add New Post',
      href: '/post',
    },
  ];

  render() {
    const { breadCrumbsLinks } = App;

    return (
      <div className="wrapper">
        <div className="box-container">
          <div className="box">
            <BreadCrumbs links={breadCrumbsLinks} />
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
