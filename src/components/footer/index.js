import React from 'react'
import  './index.scss'
const Footer=(props)=>{
    return(
        <div className="footer">
            <div className="logo">
                <img src={require("../../imgs/logo-footer.png")}/>
                <div className="shopName">小米商城</div>
            </div>
            <ul className="link">
                <li><a href="javascript:;">河畔一角主页</a><span>|</span></li>
                <li><a href="javascript:;">Vue全栈课程</a><span>|</span></li>
                <li><a href="javascript:;">React全家桶课程</a><span>|</span></li>
                <li><a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a><span></span></li>
            </ul>
            <div className="copyRight">
                Copyright ©2019 <span className="org">mi.futurefe.com</span> All Rights Reserved.
            </div>
        </div>
    ) 
}
export default Footer