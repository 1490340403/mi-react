import React from 'react'
import './index.scss'
import {connect} from 'react-redux'
import '../../static/iconfont.css'
import { Modal,Form,Input ,Button,Select,message} from 'antd';
import {address,editaddress,delAddress,postCar} from '../../request/http'
import {getAddressList,getCarList}from '../../store/actions'
class OrderConfirm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      visible:false,
      receiverName:'',
      receiverMobile:'',
      receiverProvince:"",
      receiverCity:'',
      receiverDistrict:"",
      receiverAddress:"",
      receiverZip:"",
      id:0,
      indexs:0,
     
    }
  }
 
  edit=(item)=>{
    console.log(item)
    this.setState({
      id:item.id,
      visible:true,
      receiverName:item.receiverName,
      receiverMobile:item.receiverMobile,
      receiverProvince:item.receiverProvince,
      receiverCity:item.receiverCity,
      receiverDistrict:item.receiverDistrict,
      receiverAddress:item.receiverAddress,
      receiverZip:item.receiverZip
    })
  }
  sub=()=>{
    let item = this.props.addressList.list[this.state.indexs];
    if(!item){
      message.error('请选择一个收货地址');
      return;
    }
    postCar(item.id).then(res=>{
      this.props.history.push( `/order/orderPay/${res.orderNo}`)
    })
   
  }
  close=()=>{
    this.setState({
      visible:false,
      receiverName:'',
      receiverMobile:'',
      receiverProvince:"",
      receiverCity:'',
      receiverDistrict:"",
      receiverAddress:"",
      receiverZip:"",
      id:0,
     
    })
  }
  add=()=>{
    this.setState({
      visible:true
    })
  }
  submit=async()=>{
    const { 
      receiverName,
      receiverMobile,
      receiverProvince,
      receiverCity,
      receiverDistrict,
      receiverAddress,
      receiverZip,id}=this.state
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
    this.close()
    this.props.getAddressList()
   }
  }
  del=async (item)=>{
    const id=item.id
   const data=await delAddress(id)
   if(data){
    message.success('删除成功...')
    this.close()
    this.props.getAddressList()
   }
  }
  change=(e,type)=>{
    console.log(e.target.value,type)
    this.setState({
      [type]:e.target.value
    })
  }
    componentDidMount(){
        this.props.getAddressList()
        this.props.getCarList()
    }
    render(){
        const {addressList,cartData}=this.props
        const { visible,
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,indexs}=this.state
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
                         onClick={()=>{this.setState({indexs:index})}}
                        >
                          
                        <h2>{item.receiverName}</h2>
                        <div className="phone">{item.receiverMobile}</div>
                        <div className="street">{item.receiverProvince +' '+item.receiverCity+' '+
                            item.receiverDistrict}{item.receiverAddress}</div>
                        <div className="action">
                           <a href="javascript:;" className="fl iconfont iconshanchu font" onClick={()=>this.del(item)}>
                          </a>
                          <a href="javascript:;" className="fr iconfont iconxiugai font" onClick={()=>this.edit(item)}>
                      
                          </a> 
                        </div> 
                      </div>
                    )):''
                }
              
             
              <div className="addr-add" onClick={()=>this.add()}>
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
            <a href="javascript:;" className="btn btn-large" onClick={()=>this.sub()}>去结算</a>
          </div>
        </div>
      </div>
    </div>
    {
      this.state.visible?<div className="popBox">
      <div className="pop" >
          <div className="popHeader">
              <div className="close" onClick={()=>this.close()}></div>
          </div>
          <div  className="popBody" >
          <div className="message">
            
          <input type="text" placeholder="姓名" value={receiverName} onChange={(e)=>this.change(e,'receiverName')}/>
          <input type="text" placeholder="手机号" value={receiverMobile} onChange={(e)=>this.change(e,'receiverMobile')}/>
        </div>
        <div className="select">
          <select name="province" value={receiverProvince} onChange={(e)=>this.change(e,'receiverProvince')}>
            <option value ="北京">北京</option>
            <option value ="上海">上海</option>
            <option value ="天津">天津</option>
          </select>
           <select name="city"  value={receiverCity} onChange={(e)=>this.change(e,'receiverCity')}>
            <option value ="昌平">昌平</option>
            <option value ="宝山">宝山</option>
            <option value ="天津">天津</option>
          </select>
           <select name="district" value={receiverDistrict} onChange={(e)=>this.change(e,'receiverDistrict')}>
            <option value ="第一街道">第一街道</option>
            <option value ="第二街道">第二街道</option>
            <option value ="河北">河北</option>
          </select>
        </div>
        <textarea name="street" value={receiverAddress} onChange={(e)=>this.change(e,'receiverAddress')}></textarea>
        <input type="text" placeholder="邮编" className="youbian" onChange={(e)=>this.change(e,'receiverZip')} value={receiverZip}/>
          </div>
          <div className="popFooter">
              <div className="btn1" onClick={()=>this.submit()}>提交</div>
          </div>
      </div>
  </div>:""
    }
       
       
</div>
    
        )
    }
}
const mapState=(state)=>{
    return {
        addressList:state.addressList,
        cartData:state.cartData
    }
}
const mapDispatch=(dispatch)=>{
    return {
        getAddressList:()=>dispatch(getAddressList()),
        getCarList:()=>dispatch(getCarList())
    }
}
export default connect(mapState,mapDispatch)(OrderConfirm) 