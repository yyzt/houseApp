import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './style/Login.css'
// import { Flex,InputItem} from 'antd-mobile'
import { Flex,InputItem,Button} from 'antd-mobile'
import {loginReq} from './../apis/axios'

export default class Login extends Component {
    state={
        phone:'',
        pwd:''
    }
    phchange=(val)=>{
        this.setState({phone:val})
    }
    pwchange=(val)=>{
        this.setState({pwd:val})
    }
    toReg=()=>{
        this.props.history.replace('/reg');
    }
    toForgot=()=>{
        this.props.history.replace('/forgot')
    }
    login=()=>{
        const { phone, pwd } = this.state;
        loginReq({password:pwd,phone:phone})
        .then((res)=>{
            const {token,data} = res;
            if(token){
                localStorage.setItem('token',token);
                localStorage.setItem('phone',data.phoneNum);
                alert('登陆成功');
                this.props.history.replace('/')
            }else{
                alert("登陆失败");
            }
        })
        .catch((e)=>{
            console.log(e);          
        })
    }
    render() {
        const { phone, pwd } = this.state;
        return (
            <div>
                <div className="wrapper">
                    <Flex>
                        <img src={require('../assets/images/logo.png')} alt=""/>
                    </Flex>
                    {/* <form>
                        <InputItem placeholder="title can be icon，image or text"/>
                    </form> */}
                    <InputItem placeholder="用户名" onChange={this.phchange} value={phone}>
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem placeholder="密码" onChange={this.pwchange} value={pwd}>
                        <div style={{ backgroundImage: `url(${require('../assets/images/密码.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <Button type="primary" onClick={this.login}>登录</Button>
                    <Flex justify="between">
                        <p onClick={this.toReg}>手机快速注册</p>
                        
                        <p onClick={this.toForgot}>忘记密码？</p>
                    </Flex>

                </div>
            </div>

            
                )
            }
        }
