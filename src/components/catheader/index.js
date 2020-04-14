import React from 'react'
import './index.scss'
const CatHeader=(props)=>{
    return(
        <div class="catheader">
        <div class="container">
            <div class="logo">
                <a href="/#/index" class="logoLeft"></a>
            </div>
            {/* <div class="title">
                <a href="javasccript:;">{{title}}</a>
                <slot name="tip"></slot>
            </div>
            <div class="name">{{username}}</div> */}
        </div>
    </div>
    )
}
export default CatHeader