'use strict';

import React from 'react';
import Tools from 'utils/index';
import $ from 'jquery';
import '../../sources/jquery.cookie';
import './index.scss';
import {Button} from 'qnui';

const linkConfig = {
  //本地localhost或127.0.0.1环境下的路径设置
  local: {
    'index': '/demos/index.html',
    'login': '/demos/login.html'
  },
  onLine: {//自行根据服务端路径定义
    'index': '/demos/index.html',
    'login': '/demos/login.html'
  }
}
const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uerInfo:{
        userName:$.cookie('username')
      }
    }
  }
  componentDidMount(){
    
  }
  Login(){
    location.href = links.login;
  }
  render() {
    const userName = this.state.uerInfo.userName !== undefined &&  this.state.uerInfo.userName != ''   ? (<Button shape='text' style={{color:'#f22e00'}}>{this.state.uerInfo.userName}</Button>) :(<Button onClick={this.Login.bind(this)} shape='text' style={{color:'#f22e00'}}>请登录</Button>);
    return (
       <div className="Header">
          <div className="Top">
              {userName}，欢迎来到Malls！
          </div>
       </div>
    );
  }
}
export default Header;
