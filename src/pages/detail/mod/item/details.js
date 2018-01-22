'use strict';

import React from 'react';
import {Button,Tab } from 'qnui';
import axios from 'axios';
import Evaluate from './evaluate';
import $ from 'jquery';
import '../../../../sources/jquery.cookie';
const TabPane = Tab.TabPane;

class Details extends React.Component {
	constructor(props) {
        super(props);
  	}
  	componentWillMount(){
    	
  	}



	handleChange(key) {
    	// console.log('change', key);
	}

	handleClick(key) {
	    // console.log('click', key);
	}

	render() {
	   // const str = JSON.stringify(this.state.Info);

	   const Info = this.props.Info;
	   console.log(Info)
	   const commentTotal = Info.comment_total;
	   const evaluate = (<div>累积评价<em style={{color: '#35a',margin: '0 1px',fontStyle:'normal'}}>{commentTotal}</em></div>);
	   const tabs = [
		    { tab: '商品详情', content: '商品详情' },
		    { tab: evaluate, content: <Evaluate val={Info.data} /> }
		];
	   return (
	    	   <div className="details">
	    	   		<div className="details-left">
	    	   			左侧产品与配件
	    	   		</div>
	    	   		<div className="details-right ml10">
	    	   			<Tab onChange={this.handleChange.bind(this)} type="wrapped">
					    {
					        tabs.map((item,index)=> 
					        <TabPane  key={index} tab={item.tab} onClick={this.handleClick.bind(this)}>{item.content}</TabPane>)
					    }
					    </Tab>
	    	   		</div>
	    	   </div>
	   );
	}
}

export default Details;