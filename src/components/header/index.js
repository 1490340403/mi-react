import React ,{Component} from 'react'
import './index.scss'
const Header=(props)=>{
    {console.log(props)}
    const {headerData,logyot,goLogin,goOrderList,goCart,userInfo}=props.headeProps
    return(
        <div className="header-container">
        <div className="header-box">
            <div className="nav-header">
                <div className="header-left">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div className="header-right">
                    {
                        userInfo.username?<p style={{display:"inline-block"}}>
                            <a href="javascript:;" >{userInfo.username}</a>
                            <a href="javascript:;"  onClick={()=>this.logyot()}>退出</a>
                            <a href="javascript:;"  onClick={()=>this.goOrderList()}>我的订单</a> 
                        </p>:<a href="javascript:;"  onClick={()=>this.goLogin()}>登陆</a>
                    }
                    {/* <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="username" onClick={logyot}>退出</a>
                    <a href="javascript:;" v-if="!username" onClick={goLogin}>登陆</a>
                    <a href="javascript:;" v-if="username" onClick={goOrderList}>我的订单</a> */}
                    <a href="javascript:;" className="cart" onClick={goCart}>
                        <span className="icon-cart"></span>
                        购物车
                    </a>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="logo">
                <a href="/#/index" className="logoLeft"></a>
            </div>
            <div className="nav-list">
                <div className="menu-item">
                    <a href="javascript:;">小米手机</a>
                    <ul className="children"> 
                    {
                        headerData&&headerData.length>0?headerData.map((item,index)=>
                        <li key={index}>
                            <img src={item.mainImage}/>
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}</div>
                        </li>):''
                    }
                        
                    </ul>
                    
                </div>
                <div className="menu-item">
                    <a href="javascript:;">RedMi红米</a>
                </div>
                <div className="menu-item">
                    <a href="javascript:;">电视</a>
                </div>
            </div>
            <div className="search">
                <input type="text"/>
                <a href="javascript:;"></a>
            </div>
        </div>
    </div>
    )
}
export default Header
