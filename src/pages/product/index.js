import React, { useState, useEffect } from 'react'
import './index.scss'
import Swiper from "swiper"
import "swiper/css/swiper.css"
import Params from '../../components/parms'
const Product = () => {
    const [slide, setSlide] = useState(false)
    useEffect(() => {
        initSlide()
    }, [])
    function initSlide() {
        new Swiper('.swiper-container', {
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
            autoplay: true,
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
        })
    }
    return (<div className="product">
        <div className="container">
            <Params/>
        </div>
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="bg-3"></div>
        <div className="swiper-container">
            <div className="swiper-wrapper" >
                <div className="swiper-slide">
                    <img src={require("../../imgs/product/gallery-2.png")} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={require("../../imgs/product/gallery-3.png")} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={require("../../imgs/product/gallery-4.png")} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={require("../../imgs/product/gallery-5.jpg")} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={require("../../imgs/product/gallery-6.jpg")} alt="" />
                </div>
            </div>
        </div>
        <p className="desc">小米8 AI变焦双摄拍摄</p>
        <div className="item-video">
            <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div className="video-bg" onClick={() => setSlide(true)}></div>
            <div className="video-box" >
                {
                    slide ? <div className="overlay " ></div> : ''
                }
                <div className={slide ? 'show video' : 'video'} >
                    <span className="icon-close" onClick={() => setSlide(false)}></span>
                    <video src={require("../../imgs/product/video.mp4")} muted autoplay controls="controls"></video>
                </div>
            </div>
        </div>
    </div>)
}
export default Product