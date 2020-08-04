import React,{useState,useEffect,useCallback} from 'react'
import './index.scss'
import {getslideData,add_car} from '../../store/actions'
import {useSelector,useDispatch} from 'react-redux'
import { message } from 'antd';
import Swiper from "swiper"
import Service from '../../components/service'
import "swiper/css/swiper.css"
const initSmallData=[
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
const initSlideData=[
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
const initAdData=[
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
const Home=(props)=>{
    const [smallList,setSmall]=useState([])
    const [slideList,setSlide]=useState([])
    const [adsList,setAd]=useState([])
    const slideData=useSelector(state => state.slideData)
    const dispatch = useDispatch();
    useEffect(()=>{
        setSmall(initSmallData)
        setSlide(initSlideData)
        setAd(initAdData)
        dispatch(getslideData())
        initSwiper()
    },[])
    function initSwiper(){
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
    }
  
  const  goDetail=(id)=>{
       const {push}=props.history
       push(`/detail?id=`+id)
    }
const    goPro=(id)=>{
        const {push}=props.history
         push(`/product/${id}`)
    }
 const   addCar=(id)=>{
     dispatch(add_car(id)).then(()=>{
         message.success('加入购物车成功...')
     })
       
    }
        
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
                                            smallList&&smallList.length>0?smallList.map((item,index)=>
                                            <li key={index} onClick={()=>goDetail(item.id)}>
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
                                slideList&&slideList.length>0?slideList.map((item,index)=>
                                <div className="swiper-slide index-swiper" key={index} onClick={()=>goPro(item.id)}>
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
                        adsList&&adsList.length>0?adsList.map((item,index)=>
                       (
                        <li  key={index} onClick={()=>goDetail(item.id)}>
                        <img src={item.img}/>
                        </li>
                       )
                        ):''
                    }
                  
                </ul>
        <div className="banner" onClick={()=>goDetail(30)}>
            <img src={require('../../imgs/banner-1.png')}/>
        </div>
        <div className="contentBox">
            <h2>手机</h2>
            <div className="content">
                <div className="content-left" onClick={()=>goDetail(35)}>
                    <img src={require('../../imgs/mix-alpha.jpg')}  />
                </div>
                <div className="content-right">
                    <ul>
                        {
                            slideData&&slideData.length>0?slideData.map((item,index)=>(
                                <li  key={index}>
                                    <img src={item.mainImage}  onClick={()=>goPro(item.id)} />
                                    <div className="name">{item.name}</div>
                                    <div className="subtitle">{item.subtitle}</div>
                                    <div className="price" onClick={()=>addCar(item.id)}>{item.price}元</div>
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
export default Home