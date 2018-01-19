'use strict';

import React from 'react';
import Phone from './phone';
import TV from './tv';
import './index.scss';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }
  componentDidMount(){

  }

  render() {
    return (
       <div className="Goods">
          <div className="GoodsIn">
              <Phone />
              <TV />
          </div>
       </div>
    );
  }
}
export default Index;
