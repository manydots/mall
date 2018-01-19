'use strict';

import React from 'react';
import Tools from 'utils/index';
import {Button} from 'qnui';
import $ from 'jquery';

const linkConfig = {
  //本地localhost或127.0.0.1环境下的路径设置
  local: {
    'index': '/demos/index.html',
    'login': '/demos/login.html',
    'detail':'/demos/detail.html'
  },
  onLine: {//自行根据服务端路径定义
    'index': '/demos/index.html',
    'login': '/demos/login.html',
    'detail':'/demos/detail.html'
  }
}
const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[]
    }
  }
  componentDidMount(){
    const self = this;
    $.ajax({  
        type: "GET",  
        url: "http://www.233ar.com/mall/product/getProducts", 
        data: {
          category_id:2
        },  
        async:false,  
        cache:false,  
        success: function(res){  
          // console.log(res.data);
          self.setState({
            list:res.data
          })

        },  
        error: function(json){  
          alert("系统异常，请刷新后重试...");  
        }  
    });
  }
  goDetail(id){
    //http://www.233ar.com/mall/product/getProductsByProductID
    console.log(id);
    location.href = links.detail+'?id='+id;

  }

  render() {
    const list = this.state.list;
    console.log(list)
    return (
       <div className="Phone">
          <div className="Phone-left"></div>
          <div className="Phone-right">
              <ul className="Phone-ul">
              {
              list.map((item, index) => 
                <li className="Phone-li" key={index} onClick={this.goDetail.bind(this,item.product_id)}>
                  <div className="Cont">
                      <div className="pic"><img src={'http://demo.jfinalshop.com/4.0/201501/d7f59d79-1958-4059-852c-0d6531788b48-thumbnail.jpg'} /></div>
                      <div className="introduce">{item.introduce}</div>
                      <div className="title">{item.name}</div>
                      <div className="price">￥{item.show_price}<span className="sales">已售<em>{item.sales_volume}</em>件</span></div>
                  </div>
                </li>)
              }
              </ul>
          </div>
       </div>
    );
  }
}
export default Phone;
