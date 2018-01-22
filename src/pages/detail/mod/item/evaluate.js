'use strict';

import React from 'react';
import { Row, Col } from 'qnui/lib/grid';
import {Button } from 'qnui';

class Evaluate extends React.Component {
	constructor(props) {
        super(props);
  	}
  	componentWillMount(){
    	
  	}
	render() {
	   // const str = JSON.stringify(this.state.Info);
	   // console.log(this.props.val)
	   return (
	    	   <div className="EvaluateList">
	    	   	{
					this.props.val.map((item,index)=> 
					<Row  key={index} style={{padding:'20px 0',borderBottom:'1px solid #ececec'}}>
					  	<Col style={{color: '#666'}}  span="18">{item.comment.content}</Col>
					   	<Col style={{textAlign: 'right'}} span="6">{item.comment.user_name.slice(0,1)}<span style={{color: '#999'}} >***</span>{item.comment.user_name.slice(item.comment.user_name.length-1)}</Col>
					</Row>)
				}
	    	   </div>
	   );
	}
}

export default Evaluate;