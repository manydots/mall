'use strict';

import React from 'react';
import {Button} from 'qnui';
import './index.scss';



class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    
  }

  render() {
    return (
       <div className="Slide">
          <div className="SlideIn">
              欢迎来到Malls！，这里是轮播模块。。。创建中
          </div>
       </div>
    );
  }
}
export default Slide;
