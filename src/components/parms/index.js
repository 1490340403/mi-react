import React,{memo} from 'react'
import './index.scss'
const parms=memo((props)=>{
    return (
        <div className="params_box" >
            <div className="container">
                <div className="params_title">小米CC9</div>
                <div className="params">
                    <a src="javascript:;">概述</a><span>|</span>
                    <a src="javascript:;">参数</a><span>|</span>
                    <a src="javascript:;">用户评价</a>
                    <slot name="buy"></slot>
                </div>
            </div>
        </div>
    )
})
export default parms