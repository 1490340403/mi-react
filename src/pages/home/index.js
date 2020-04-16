import React from 'react'
import './index.scss'
import {getslideData,add_car} from '../../store/actions'
import {connect} from 'react-redux'
import { message } from 'antd';
import Swiper from "swiper"
import Service from '../../components/service'
import "swiper/css/swiper.css"
class Home extends React.Component{
    componentWillMount(){
       this.smallList=[
            {
                id:30,
                title:'小米CC9',
                img:require('../../imgs/item-box-1.png')
            },
               {
                id:31,
                title:'小米CC9',
                img:require('../../imgs/item-box-2.png')
            },
               {
                id:32,
                title:'Redmi K20 Pro',
                img:require('../../imgs/item-box-3.jpg')
            },
               {
                id:33,
                title:'移动4G专区',
                img:require('../../imgs/item-box-4.jpg')
            }, {
                id:30,
                title:'小米CC9',
                img:require('../../imgs/item-box-1.png')
            },
               {
                id:31,
                title:'小米CC9',
                img:require('../../imgs/item-box-2.png')
            },
               {
                id:32,
                title:'Redmi K20 Pro',
                img:require('../../imgs/item-box-3.jpg')
            },
               {
                id:33,
                title:'移动4G专区',
                img:require('../../imgs/item-box-4.jpg')
            },
        ]
        this.slideList=[
            {
              id:'42',
              img:require('../../imgs/slider/slide-1.jpg')
            },
            {
              id:'45',
              img:require('../../imgs/slider/slide-2.jpg')
            },
            {
              id:'46',
              img:require('../../imgs/slider/slide-3.jpg')
            },
            {
              id:'',
              img:require('../../imgs/slider/slide-4.jpg')
            },
            {
              id:'',
              img:require('../../imgs/slider/slide-1.jpg')
            }
          ]
        this.adsList=[
        {
            id:33,
            img:require('../../imgs/ads/ads-1.png')
        },{
            id:48,
            img:require('../../imgs/ads/ads-2.jpg')
        },{
            id:45,
            img:require('../../imgs/ads/ads-3.png')
        },{
            id:47,
            img:require('../../imgs/ads/ads-4.jpg')
        }
        ]
    }
    componentDidMount(){
    new Swiper ('.swiper-container', {
        
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })    
    this.props.getslideData()          
  }
    goDetail=(id)=>{
       const {push}=this.props.history
       push(`/detail?id=`+id)
    }
    goPro=(id)=>{
        const {push}=this.props.history
         push(`/product/${id}`)
    }
    addCar=(id)=>{
     this.props.add_car(id).then(()=>{
         message.success('加入购物车成功...')
     })
       
    }
    render(){
        const {slideData}=this.props
        return(
            <div className="box">
              <div className="container">
                <div className="bannerBox">
                    <div className="nav-menu">
                        <ul className="menu-wrap">
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                                <div className="children">
                                    <ul>
                                        {
                                            this.smallList&&this.smallList.length>0?this.smallList.map((item,index)=>
                                            <li key={index} onClick={()=>this.goDetail(item.id)}>
                                            <a href="javascript:;">
                                                <img src={item.img} alt=""/> 
                                                {item.title}
                                            </a>
                                        </li>):""
                                        }
                                        
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                            </li>
                        </ul>
                    </div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper" >
                            {
                                this.slideList&&this.slideList.length>0?this.slideList.map((item,index)=>
                                <div className="swiper-slide index-swiper" key={index} onClick={()=>this.goPro(item.id)}>
                                    <img src={item.img}/>
                                </div>
                                ):''
                            }
                            <div className="swiper-button-prev" ></div>
                            <div className="swiper-button-next" ></div>
                        </div>
                    </div>
                </div>
                <ul className="ads">
                    {
                        this.adsList&&this.adsList.length>0?this.adsList.map((item,index)=>
                       (
                        <li  key={index} onClick={()=>this.goDetail(item.id)}>
                        <img src={item.img}/>
                        </li>
                       )
                        ):''
                    }
                  
                </ul>
        <div className="banner" onClick={()=>this.goDetail(30)}>
            <img src={require('../../imgs/banner-1.png')}/>
        </div>
        <div className="contentBox">
            <h2>手机</h2>
            <div className="content">
                <div className="content-left" onClick={()=>this.goDetail(35)}>
                    <img src={require('../../imgs/mix-alpha.jpg')}  />
                </div>
                <div className="content-right">
                    <ul>
                        {
                            slideData&&slideData.length>0?slideData.map((item,index)=>(
                                <li  key={index}>
                                    <img src={item.mainImage}  onClick={()=>this.goPro(item.id)} />
                                    <div className="name">{item.name}</div>
                                    <div className="subtitle">{item.subtitle}</div>
                                    <div className="price" onClick={()=>this.addCar(item.id)}>{item.price}元</div>
                                </li>
                            )):''
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Service></Service>
            </div>
        )
    }
}
const mapState=(state)=>{
  return {
    slideData:state.slideData,
    
  }
}
const mapDispatch=(dispatch)=>{
    return {
        getslideData:()=>dispatch(getslideData()),
        add_car:(id)=>dispatch(add_car(id))
    }
}
export default connect(mapState,mapDispatch)(Home)