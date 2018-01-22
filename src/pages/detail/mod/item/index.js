'use strict';

import React from 'react';
import Tools from 'utils/index';
import {Button,Icon,NumberPicker } from 'qnui';
import axios from 'axios';
import $ from 'jquery';
import Details from './details';
import '../../../../sources/jquery.cookie';
import './index.scss';

class Detail extends React.Component {
	constructor(props) {
        super(props);
        this.state={
        	Info:'',
        	id:Tools.getUrlParam('id') || 1,
        	buyNumber:1,
        	kind:[]
        }
 
  	}
  	componentWillMount(){
    	this.getData();
  	}
	getData(){

		const self = this;
		const id = Tools.getUrlParam('id') || 1;
		let url = 'http://www.233ar.com/mall/product/getProductsByProductID'+'?product_id='+ id;
		// const url = 'http://www.233ar.com/mall/product/getProductsByProductID';
		axios.get(url).then(function (res) {
		     
		    if(res.status == 200 || res.status == '200'){
		    	// console.log(res);
		    	self.setState({
                	Info: res.data,
                	kind: res.data.kind
            	})
		    }

		}).catch(function (error) {
		    console.log(error);
		});
	}
	addCat(){
		//http://www.233ar.com/mall/shoppingCart/addShoppingCart
		const cookie = $.cookie('username');
		// console.log(cookie);
		const self = this;
		const id = this.state.id;
		const buyNumber = this.state.buyNumber;
		let url = 'http://www.233ar.com/mall/shoppingCart/addShoppingCart'+'?product_id='+ id+'&buy_number='+buyNumber;
		// const url = 'http://www.233ar.com/mall/product/getProductsByProductID';
		if(cookie !== undefined &&  cookie != ''){
			axios.post(url).then(function (res) {
		    // console.log(res);
		    if(res.status == 200 || res.status == '200'){
		 		// console.log(res);
		 		location.reload();
		    }

			}).catch(function (error) {
			    console.log(error);
			});
		}else{
			location.href = links.login;
		}
		
	}
	onCorrect(obj) {
		this.setState({
			buyNumber:obj
		})
	}

	render() {
	   // const str = JSON.stringify(this.state.Info);
	   const Info = this.state.Info;
	   return (
	    <div>
	    	<div className="detail">
	    	   
	    	   <div className="detailIn">
	    	   		<div className="detailIn-left">
	    	   			<div className="pic"><img src={'https://img.alicdn.com/imgextra/i4/1917047079/TB24SDEdBUSMeJjSszcXXbnwVXa_!!1917047079.png_430x430q90.jpg'} /></div>
	    	   		</div>
	    	   		<div className="detailIn-right">
						<div className="detailIn-tip">
							<div className="description">
								{ Info ? Info.page_description : ''}
							</div>
							<div className="introduce">
								{ Info ? Info.introduce : ''}
							</div>
							<div className="price rol">
								<label>活动价格</label>{ Info ? Info.price : '' }
							</div>
							

								{
									this.state.kind.map((item, index) => 
									<div className="parameter rol" key={index}>
						                 
						                      <label>{item.kind_name}</label>
						                      {
						                      	item.kind_attribute.map((item,index)=>
						                      		<Button className="ml5" key={index} style={{ backgroundColor:'#fff',border:'1px solid #e2e1e3',color: '#000'}}>{item.name}</Button>
						                      		
						                      	)
						                      }
						                  
						             </div>)
								}
							
							<div className="sales rol">
								<label>已售</label>{ Info ? Info.sales_volume : ''}件
							</div>
							<div className="Number rol">
								<label>数量</label><NumberPicker defaultValue={this.state.buyNumber} min={1} onChange={this.onCorrect.bind(this)} step={1}/>
							</div>
							<div className="stock rol">
								<label>库存</label>{Info ? Info.stock : ''}
							</div>
	    	   			</div>
	    	   			<div className="buy">
								<Button size='large' style={{ backgroundColor:'#ffeded',border:' 1px solid #FF0036',color: '#FF0036',width:'150px'}}>立即购买</Button>
								<Button size='large' className='ml20' style={{ backgroundColor:'#FF0036',width:'150px'}} type="primary"  onClick={this.addCat.bind(this)}><Icon style={{color:'#fff'}} type="cart" size='xs' />加购物车</Button>
						</div>
	    	   		</div>
	    	   </div>
	    	   <Details {...this.state} />
	    	</div>
		 
	    </div>
	   );
	}
}

export default Detail;