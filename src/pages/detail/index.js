'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'qnui';
import axios from 'axios';
import Tools from 'utils/index';
import './index.scss';

class Detail extends React.Component {
	constructor(props) {
        super(props);
        this.state={
        	Info:'',
        	id:Tools.getUrlParam('id') || 1
        }
 
  	}
  	componentDidMount(){
    	this.getData();
  	}
	getData(){

		const self = this;
		const id = Tools.getUrlParam('id') || 1;
		let url = 'http://www.233ar.com/mall/product/getProductsByProductID'+'?product_id='+ id;
		// const url = 'http://www.233ar.com/mall/product/getProductsByProductID';
		axios.get(url).then(function (res) {
		    // console.log(res);
		    if(res.status == 200 || res.status == '200'){
		    	self.setState({
                	Info: res.data
            	})
		    }

		}).catch(function (error) {
		    console.log(error);
		});
	}
	addCat(){
		//http://www.233ar.com/mall/shoppingCart/addShoppingCart
		const self = this;
		const id = this.state.id;
		let url = 'http://www.233ar.com/mall/shoppingCart/addShoppingCart'+'?product_id='+ id+'&buy_number=1';
		// const url = 'http://www.233ar.com/mall/product/getProductsByProductID';
		axios.post(url).then(function (res) {
		    console.log(res);
		    if(res.status == 200 || res.status == '200'){
		 		console.log(res);
		    }

		}).catch(function (error) {
		    console.log(error);
		});
	}

	render() {
	   const str = JSON.stringify(this.state.Info);
	   const Info = this.state.Info;
	   return (
	    <div>
	    	<div className="detail">
	    	   <div className="Top">头部</div>
	    	   <div className="detailIn">
	    	   		<div className="detailIn-left">
	    	   			<div className="pic"><img src={'http://demo.jfinalshop.com/4.0/201501/d7f59d79-1958-4059-852c-0d6531788b48-thumbnail.jpg'} /></div>
	    	   		</div>
	    	   		<div className="detailIn-right">
						<div className="detailIn-tip">
							<div className="description">
								{ Info ? Info.msg.page_description : ''}
							</div>
							<div className="introduce">
								{ Info ? Info.msg.introduce : ''}
							</div>
							<div className="price">
								价格：{ Info ? Info.msg.show_price : ''}
							</div>
							<div className="ss">
								已售：0
							</div>
							<div className="box">
								<Button >立即购买</Button>
								<Button type='primary' onClick={this.addCat.bind(this)}>加购物车</Button>
							</div>

	    	   			</div>
	    	   		</div>
	    	   </div>
	    	   <div className="footer">{str}</div>
	    		
	    	</div>
		 
	    </div>
	   );
	}
}

ReactDOM.render(<Detail />, document.getElementById('container'));
