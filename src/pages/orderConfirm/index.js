import React,{useEffect,useState,useCallback} from 'react'
import './index.scss'
import {useSelector,useDispatch} from 'react-redux'
import '../../static/iconfont.css'
import { Modal,Form,Input ,Button,Select,message} from 'antd';
import {address,editaddress,delAddress,postCar} from '../../request/http'
import {getAddressList,getCarList}from '../../store/actions'
function OrderConfirm (props){
  const dispatch=useDispatch()
  const addressList=useSelector(state=>state.addressList)
  const cartData=useSelector(state=>state.cartDatat)
       
  const [visible,setVisible]=useState(false)
  const [receiverName,setReceiverName]=useState('')
  const [receiverMobile,setReceiverMobile]=useState('')
  const [receiverProvince,setReceiverProvince]=useState('')
  const [receiverCity,setReceiverCity]=useState('')
  const [receiverDistrict,setReceiverDistrict]=useState('')
  const [receiverAddress,setReceiverAddress]=useState('')
  const [receiverZip,setReceiverZip]=useState('')
  const [id,setId]=useState(0)
  const [indexs,setIndex]=useState(0)
  useEffect(()=>{
    dispatch(getAddressList())
    dispatch(getCarList())
  },[])
  const  edit=useCallback( (item)=>{
    console.log(item)
    setId(item.id)
    setVisible(true)
    setReceiverMobile(item.receiverMobile)
    setReceiverName(item.receiverName)
    setReceiverProvince(item.receiverProvince)
    setReceiverCity(item.receiverCity)
    setReceiverDistrict(item.receiverDistrict)
    setReceiverAddress(item.receiverAddress)
    setReceiverZip(item.receiverZip)
 
  },[])
  const  sub=useCallback( ()=>{
    let item = addressList.list[this.state.indexs];
    if(!item){
      message.error('请选择一个收货地址');
      return;
    }
    postCar(item.id).then(res=>{
      props.history.push( `/order/orderPay/${res.orderNo}`)
    })
   
  },[])
  const   close=useCallback( ()=>{
    setId('')
    setVisible(false)
    setReceiverMobile('')
    setReceiverName('')
    setReceiverProvince('')
    setReceiverCity('')
    setReceiverDistrict('')
    setReceiverAddress('')
    setReceiverZip('')

  },[])
  const   add=useCallback( ()=>{
    setVisible(true)
  },[])
const  submit=useCallback( async()=>{
   const params={
    receiverName,
    receiverMobile,
    receiverProvince,
    receiverCity,
    receiverDistrict,
    receiverAddress,
    receiverZip
   }
   let data=''
   if(id!=0){
    data=await editaddress(params,id)
   }else{
     data=await address(params)
   }
   
   if(data){
    message.success('修改成功...')
    close()
    dispatch(getAddressList())
   }
  },[])
  const  del=useCallback( async (item)=>{
    const id=item.id
   const data=await delAddress(id)
   if(data){
    message.success('删除成功...')
    close()
    dispatch(getAddressList())
   }
  },[])
  const   change=useCallback( (e,type)=>{
    console.log(e.target.value,type)
    if(type=='receiverName'){
      setReceiverName(e.target.value)
    }else if(type=='receiverMobile'){
      setReceiverMobile(e.target.value)
    }else if(type=='receiverProvince'){
      setReceiverProvince(e.target.value)
    }else if(type=='receiverCity'){
      setReceiverCity(e.target.value)
    }else if(type=='receiverDistrict'){
      setReceiverDistrict(e.target.value)
    }
    else if(type=='receiverAddress'){
      setReceiverAddress(e.target.value)
    }else if(type=='receiverZip'){
      setReceiverZip(e.target.value)
    }
  },[])
   

    
        return(
            <div className="orderConfirm">
    <div className="wrapper">
      <div className="container">
        <div className="order-box">
          <div className="item-address">
            <h2 className="addr-title">收货地址</h2>
            <div className="addr-list clearfix">
                {
                    addressList.list&&addressList.list.length>0?addressList.list.map((item,index)=>(
                       
                        <div  key={index}  className={indexs==index?'addr-info checked':'addr-info'}
                         onClick={setIndex(index)}
                        >
                          
                        <h2>{item.receiverName}</h2>
                        <div className="phone">{item.receiverMobile}</div>
                        <div className="street">{item.receiverProvince +' '+item.receiverCity+' '+
                            item.receiverDistrict}{item.receiverAddress}</div>
                        <div className="action">
                           <a href="javascript:;" className="fl iconfont iconshanchu font" onClick={()=>del(item)}>
                          </a>
                          <a href="javascript:;" className="fr iconfont iconxiugai font" onClick={()=>edit(item)}>
                      
                          </a> 
                        </div> 
                      </div>
                    )):''
                }
              
             
              <div className="addr-add" onClick={()=>add()}>
                <div className="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div className="item-good">
            <h2>商品</h2>
            <ul>
         
              {
                cartData.cartProductVoList&&cartData.cartProductVoList.length>0?cartData.cartProductVoList.map(item=>(
                  <li >
                  <div className="good-name">
                    <img src={item.productMainImage} alt=""/>
                    <span>{item.productName +' '+item.productName}</span>
                  </div>
                  <div className="good-price">{item.productPrice}元x{item.quantity}</div>
                  <div className="good-total">{item.productPrice}元</div>
                </li>
                )):''
              }
             
             
            </ul>
          </div>
          <div className="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div className="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div className="detail">
            <div className="item">
              <span className="item-name">商品件数：</span>
               <span className="item-val">{cartData.cartTotalQuantity}件</span>
            </div>
            <div className="item">
              <span className="item-name">商品总价：</span>
               <span className="item-val">{cartData.cartTotalPrice}元</span> 
            </div>
            <div className="item">
              <span className="item-name">优惠活动：</span>
              <span className="item-val">0元</span>
            </div>
            <div className="item">
              <span className="item-name">运费：</span>
              <span className="item-val">0元</span>
            </div>
            <div className="item-total">
              <span className="item-name">应付总额：</span>
               <span className="item-val">{cartData.cartTotalPrice}元</span>
            </div>
          </div>
          <div className="btn-group">
            <a href="/#/order/cart" className="btn btn-default btn-large">返回购物车</a>
            <a href="javascript:;" className="btn btn-large" onClick={()=>sub()}>去结算</a>
          </div>
        </div>
      </div>
    </div>
    {
     visible?<div className="popBox">
      <div className="pop" >
          <div className="popHeader">
              <div className="close" onClick={()=>close()}></div>
          </div>
          <div  className="popBody" >
          <div className="message">
            
          <input type="text" placeholder="姓名" value={receiverName} onChange={(e)=>change(e,'receiverName')}/>
          <input type="text" placeholder="手机号" value={receiverMobile} onChange={(e)=>change(e,'receiverMobile')}/>
        </div>
        <div className="select">
          <select name="province" value={receiverProvince} onChange={(e)=>change(e,'receiverProvince')}>
            <option value ="北京">北京</option>
            <option value ="上海">上海</option>
            <option value ="天津">天津</option>
          </select>
           <select name="city"  value={receiverCity} onChange={(e)=>change(e,'receiverCity')}>
            <option value ="昌平">昌平</option>
            <option value ="宝山">宝山</option>
            <option value ="天津">天津</option>
          </select>
           <select name="district" value={receiverDistrict} onChange={(e)=>change(e,'receiverDistrict')}>
            <option value ="第一街道">第一街道</option>
            <option value ="第二街道">第二街道</option>
            <option value ="河北">河北</option>
          </select>
        </div>
        <textarea name="street" value={receiverAddress} onChange={(e)=>change(e,'receiverAddress')}></textarea>
        <input type="text" placeholder="邮编" className="youbian" onChange={(e)=>change(e,'receiverZip')} value={receiverZip}/>
          </div>
          <div className="popFooter">
              <div className="btn1" onClick={()=>submit()}>提交</div>
          </div>
      </div>
  </div>:""
    }
       
       
</div>
    
        )
    }
export default OrderConfirm