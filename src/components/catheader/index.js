import React from 'react'
import './index.scss'
const CatHeader=(props)=>{
    return(
        <div className="catheader">
        <div className="container">
            <div className="logo">
                <a href="/#/index" className="logoLeft"></a>
            </div>
            {/* <div className="title">
                <a href="javasccript:;">{{title}}</a>
                <slot name="tip"></slot>
            </div>
            <div className="name">{{username}}</div> */}
        </div>
    </div>
    )
}
export default CatHeader