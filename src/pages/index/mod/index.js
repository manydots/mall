'use strict';

import React from 'react';
import Search from './search/index';
import Slide from './slide/index';
import Goods from './goods/index';

class Index extends React.Component {
  render() {
    return (
    <div className="Index">
      <Search />
      <Slide />
      <Goods />
    </div>
    );
  }
}
export default Index;
