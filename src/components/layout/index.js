'use strict';

import React from 'react';

import Header from 'components/header/index';
import './index.scss';
class Layout extends React.Component {
  render() {

    return (
      <div className="main container">
        <Header />
        <div className="main-content">
          <div className='right-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
