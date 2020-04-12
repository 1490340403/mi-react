import React from 'react'

import  Params from '../../components/parms'
import Service from '../../components/service'
import {connect} from 'react-redux'
import {getProductDetail} from '../../store/actions'
import Swiper from "swiper"
import "swiper/css/swiper.css"
import './index.scss'
class Detail extends React.Component{
  constructor(props){
    super(props)
    this.setState={
      proList:{}
    }
  }
  componentDidMount(){
    let {search}=this.props.location
    let id=search.replace('?id=','')
    console.log(id)
    this.props.getProductDetail(id)
  }
    render(){
      return(
        <div className="detail">
        <Params/>
         <div className="wrapper">
      <div className="container clearfix">
        <div className="swiper">
          {/* <swiper :options="swiperOption">
              <swiper-slide><img src={require("../../imgs/detail/phone-1.jpg")} alt=""></swiper-slide>
              <swiper-slide><img src={require("../../imgs/detail/phone-2.jpg")} alt=""></swiper-slide>
              <swiper-slide><img src={require("../../imgs/detail/phone-3.jpg")} alt=""></swiper-slide>
              <swiper-slide><img src={require("../../imgs/detail/phone-4.jpg")} alt=""></swiper-slide>
              
              <div className="swiper-pagination"  slot="pagination"></div>
          </swiper> */}
        </div>
        <div className="content">
          {/* <h2 className="item-title">{proList.name}</h2>
          <p className="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div className="delivery">{proList.subtitle}</div>
          <div className="item-price">{proList.price}<span className="del">{proList.price}</span></div>
          <div className="line"></div> */}
          <div className="item-addr">
            <i className="icon-loc"></i>
            <div className="addr">北京 北京市 朝阳区 安定门街道</div>
            <div className="stock">有现货</div>
          </div>
          <div className="item-version clearfix">
            <h2>选择版本</h2>
            {/* <div className="phone fl " :className="{'checked':checked==1}" @click="change(1)">6GB+64GB 全网通</div>
            <div className="phone fr" :className="{'checked':checked==2}" @click="change(2)">4GB+64GB 移动4G</div> */}
          </div>
          <div className="item-color">
            <h2>选择颜色</h2>
            <div className="phone checked">
              <span className="color"></span>
              深空灰
            </div>
          </div>
          {/* <div className="item-total">
            <div className="phone-info clearfix">
              <div className="fl">小米9 6GB+64GB 全网通 深灰色</div>
              <div className="fr">{proList.price}元</div>
            </div>
            <div className="phone-total">总计：{proList.price}元</div>
          </div> */}
          <div className="btn-group">
            {/* <a href="javascript:;" className="btn btn-huge fl" @click="addCart">加入购物车</a> */}
          </div>
        </div>
      </div>
    </div>
    {/* // <div className="price-info">
    //   <div className="container">
    //     <h2>价格说明</h2>
    //     <div className="desc">
    //       <img src={require("../../imgs/detail/item-price.jpeg")} alt="">
    //     </div>
    //   </div>
    // </div> */}
        <Service/>
    </div>
      )
    }
}
const mapStata=(state)=>{
  return {
    proDetail:state.proDetail
  }
}
const mapDispatch=(dispatch)=>{
  return {
    getProductDetail:(id)=>dispatch(getProductDetail(id))
  }
}
export default connect(mapStata,mapDispatch)(Detail)