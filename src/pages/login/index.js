import React from 'react'
import {connect} from 'react-redux'
import {getLogin} from '../../store/actions'
import './index.scss'
class Login extends React.Component{
    state={
        username:'',
        password:''
    }
    componentDidMount(){
        
    }
    
    collectionData=(e,type)=>{
        this.setState({
            [type]:e.target.value
        })
    }
    login=()=>{
        const {username,password}=this.state
       this.props.getLogin({username,password}).then(()=>{
           this.props.history.push('/')
       })
    }
    render(){
    return(
        <div className="login">
    <div className="container">
      <a href="/#/index"><img src={require("../../imgs/login-logo.png")} alt=""/></a>
    </div>
    <div className="wrapper">
      <div className="container">
        <div className="login-form">
          <h3>
            <span className="checked">帐号登录</span><span className="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div className="input">
            <input type="text" placeholder="请输入帐号"  onChange={(e)=>this.collectionData(e,'username')}/>
          </div>
          <div className="input">
            <input type="password" placeholder="请输入密码"  onChange={(e)=>this.collectionData(e,'password')}/>
          </div>
          <div className="btn-box">
            <a href="javascript:;" className="btn" onClick={()=>this.login()}>登录</a>
          </div>
          <div className="tips">
            <div className="sms" onClick="register">手机短信登录/注册</div>
            <div className="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
        <a href="https://coding.imooc.com/className/113.html" target="_blank">Vue全栈课程</a><span>|</span>
        <a href="https://coding.imooc.com/className/236.html" target="_blank">React全家桶课程</a><span>|</span>
        <a href="https://coding.imooc.com/className/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
      </div>
      <p className="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
    )
    }
}
const mapState=(state)=>{
    return {
        
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getLogin:(params)=>dispatch(getLogin(params))
    }
}
export default connect(mapState,mapDispatch)(Login)