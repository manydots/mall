'use strict';

import React from 'react';
import LinkTool from 'utils/linkTools';
import axios from 'axios';
import {Button,Icon } from 'qnui';
import $ from 'jquery';
import '../../sources/jquery.cookie';
import './index.scss';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CarNum:0,
      uerInfo:{
        userName:$.cookie('username')
      }
    }
  }
  componentWillMount(){
    const isLogin = this.state.uerInfo.userName !== undefined &&  this.state.uerInfo.userName != '' ? true : false;
    if(isLogin){
      this.CarNum();
    }
    
  }
  Login(){
    location.href = LinkTool.login;
  }
  CarNum(){
    const self = this;
    let url = 'http://www.233ar.com/mall/shoppingCart/getShoppingCartList';
    axios.post(url).then(function (res) {
        
        if(res.status == 200 || res.status == '200'){
          console.log(res);
          self.setState({
              CarNum: res.data.data.length
          })
        }

    }).catch(function (error) {
        console.log(error);
    });
  }
  render() {
    const userName = this.state.uerInfo.userName !== undefined &&  this.state.uerInfo.userName != ''   ? (<Button shape='text' style={{color:'#f22e00'}}>{this.state.uerInfo.userName}</Button>) :(<Button onClick={this.Login.bind(this)} shape='text' style={{color:'#f22e00'}}>亲，请登录</Button>);
    return (
       <div className="Header">
          <div className="Top">
              <div className="Top-left">
              {userName}，欢迎来到Malls！
               </div>
               <div className="Top-right">
                  <Button className="ml10" shape='text' onClick={()=> location.href = LinkTool.index} style={{color:'#666666'}}>返回首页</Button>
                  <Button className="ml10" shape='text' style={{color:'#666666'}}>我的Malls</Button>
                  <Button className="ml10" shape='text' style={{color:'#666666'}}><Icon style={{color:'#f22e00'}} type="cart" size='xs' />购物车<span className='CarNum'>{this.state.CarNum}</span></Button>
               </div>
          </div>
       </div>
    );
  }
}
export default Header;
