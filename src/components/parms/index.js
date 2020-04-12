import React from 'react'
import './index.scss'
const parms=(props)=>{
    return (
        <div class="params_box" >
            <div class="container">
                <div class="params_title">小米CC9</div>
                <div class="params">
                    <a src="javascript:;">概述</a><span>|</span>
                    <a src="javascript:;">参数</a><span>|</span>
                    <a src="javascript:;">用户评价</a>
                    <slot name="buy"></slot>
                </div>
            </div>
        </div>
    )

}
export default parms