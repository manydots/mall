'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tools from 'utils/index';
import Form, {Item as FormItem } from 'qnui/lib/form';
import {Button,Input,Field,Dialog} from 'qnui';
import $ from 'jquery';
import '../../sources/jquery.cookie';
import './index.scss';

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

class Login extends React.Component {
	constructor(props) {
        super(props);
        this.field = new Field(this);
  	}
  	handleReset(e) {
        e.preventDefault();
        this.field.reset();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }else{
                // $.cookie('username','小厨');
            	$.ajax({  
			        type: "GET",  
			        url: "http://www.233ar.com/mall/user/logindo", 
			        data: {
			        	user_name:values.userName,
			        	login_password:values.passWord
			        },  
			        async:false,  
			        cache:false,  
			        success: function(res){  
			            console.log(res);
			            if(res.msg == '-1'){
			            	Dialog.alert({
			            		content:'账号或密码错误！'
			            	});
			            	return;
			            }else{
			            	Dialog.alert({
			            		content:'页面即将跳转...'
			            	});
			            	location.href = links.index;

			            }
			        },  
			        error: function(json){  
			            alert("系统异常，请刷新后重试...");  
			        }  
    			});
            }

        });
    }

    checkPass(rule, value, callback) {
        const { validate } = this.field;
        if (value) {
           validate(['rePasswd']);
        }
        callback();
    }

	render() {
		const {init, getError, getState } = this.field;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
	   return (
	    <div>
	    	<div className="Top">头部</div>
		    <div className="Login">
		      <div className="LoginIner">
		        <div className="Iner">
		        <h2 className='title'>密码登录</h2>
		       	<Form field={this.field}>
                <FormItem label="用户名：" {...formItemLayout} hasFeedback >
                    <Input maxLength={20} hasLimitHint placeholder="请输入用户"
                        {...init('userName', {
                            rules: [
                                {required: true, min: 3, message: '用户名至少为 3 个字符'}
                            ]
                        })} />
                </FormItem>
                <FormItem label="密码：" {...formItemLayout} hasFeedback>
                    <Input htmlType="password"
                        {...init('passWord', {
                            rules: [
                                {required: true, whitespace: true, message: '请填写密码'}
                            ]
                        })}
                    />
                </FormItem>
                <FormItem wrapperCol={{ offset: 6 }}>
                    <Button type="primary" style={{backgroundColor:'#f52b00'}} onClick={this.handleSubmit.bind(this)}>登录</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="primary" onClick={this.handleReset.bind(this)}>重置</Button>
                </FormItem>
            	</Form>
            </div>
		      </div>
		    </div>
		    <div className="footer">尾部</div>
	    </div>
	   );
	}
}

ReactDOM.render(<Login />, document.getElementById('container'));
