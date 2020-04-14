import React from 'react'
import {connect} from 'react-redux'
import './index.scss'
import {message} from 'antd'
import {getCarList,getAddNum,getDelCart,getunSelectAll,getSelectAll} from '../../store/actions'
class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedAll:false,//全选
            cartTotalQuantity:0,//总数
            cartTotalPrice:0,//总钱数
            cartProductVoList:[],//数据
            selectNum:0
        }
    }
    componentDidMount(){
        this.props.getCarList()
        const {cartData}=this.props
       console.log(this.props,666)
        if(cartData&&cartData.cartTotalPrice>0){
          console.log(77888)
        }
        // if(cartData.cartProductVoList&&cartData.cartProductVoList.length>0){
        //   console.log(19,cartData)
        //   this.setState({
        //     selectedAll:cartData.selectedAll,//全选
        //     cartTotalQuantity:cartData.cartTotalQuantity,//总数
        //     cartTotalPrice:cartData.cartTotalPrice,//总钱数
        //     cartProductVoList:cartData.cartProductVoList,//数据
        //     selectNum:0
        //   })
        // }
       
    }
    componentWillReceiveProps(nextProps){
     // console.log(this.props.cartData,nextProps.cartData,89)
    }
    shouldComponentUpdate(nextProps,nextState){
     // this.checkNum()
      // console.log('01是否要更新数据')
      // console.log(nextProps)		//父组件传给子组件的值，这里没有会显示空
      // console.log(nextState)		//数据更新后的值
      // return true;				//返回true，确认更新
    }
    checkNum=()=>{
      const {cartData:{cartProductVoList}}=this.props
      let num=0
      if(cartProductVoList&&cartProductVoList.length>0){
          cartProductVoList.map(item=>{
            if(item.productSelected){
              num+=item.quantity
            }
          })
      }
      return num
    }
    desc=(data)=>{
      let quantity=data.quantity-1
      if(quantity<1){
        message.error('最少一个...')
        return
      }
      this.props.getAddNum(data.productId,quantity)
    }
    add=(data)=>{
      let quantity=data.quantity+1
      if(quantity>data.productStock){
        message.error('超出库存...')
        return
      }
      this.props.getAddNum(data.productId,quantity)
      console.log(data)
    }
    del=(data)=>{
      this.props.getDelCart(data.productId)
    }
    changeChecked=(data)=>{
      let selected=!data.productSelected
      let quantity=data.quantity
      this.props.getAddNum(data.productId,quantity,selected)
    }
    toggleAll=()=>{
      const {cartData,getunSelectAll,getSelectAll}=this.props
      let selectedAll=cartData.selectedAll
      if(selectedAll){
        getunSelectAll()
      }else{
        getSelectAll()
      }
      
    }
    order=()=>{}
    render(){
        const {cartData}=this.props
        console.log(cartData,9994)
        return(
            <div className="cart">
          
            <div className="wrapper">
          <div className="container">
            <div className="cart-box">
              <ul className="cart-item-head">
                <li className="col-1">
                    <span className={cartData.selectedAll?"checked checkbox":"checkbox"}  onClick={()=>this.toggleAll()}></span>全选</li>
                <li className="col-3">商品名称</li>
                <li className="col-1">单价</li>
                <li className="col-2">数量</li>
                <li className="col-1">小计</li>
                <li className="col-1">操作</li>
              </ul>
              <ul className="cart-item-list">
                  {
                      cartData.cartProductVoList&&cartData.cartProductVoList.length>0?cartData.cartProductVoList.map((item,index)=>(
                        <li className="cart-item"  key={index}>
                        <div className="item-check">
                           <span className={item.productSelected?'checked checkbox':'checkbox'} onClick={()=>this.changeChecked(item)}></span>
                        </div>
                        <div className="item-name">
                          <img src={item.productMainImage} alt=""/>
                          <span>{item.productName +' , '+ item.productSubtitle}</span>
                        </div>
                        <div className="item-price">{item.productPrice}元</div>
                        <div className="item-num">
                          <div className="num-box">
                            <a href="javascript:;" onClick={()=>this.desc(item)}>-</a>
                            <span>{item.quantity}</span>
                            <a href="javascript:;" onClick={()=>this.add(item)}>+</a>
                          </div>
                        </div>
                        <div className="item-total">{item.productTotalPrice}元</div>
                        <div className="item-del" onClick={()=>this.del(item)}></div>
                      </li>
                      )):''
                  }
               
              </ul>
            </div>
             <div className="order-wrap clearfix">
               <div className="cart-tip fl">
                 <a href="/">继续购物</a>
                 共<span>{cartData.cartTotalQuantity}</span>件商品，已选择<span>{this.checkNum()}</span>件
               </div>
               <div className="total fr">
                合计：<span>{cartData.cartTotalPrice}</span>元
                 <a href="javascript:;" className="btn" onClick={()=>this.order()}>去结算</a>
               </div>
             </div>
          </div>
        </div>
        </div>
        )
    }
}
const mapState=(state)=>{
   return{
    cartData:state.cartData
   }
}
const mapDispatch=(dispatch)=>{
    return{
        getCarList:()=>dispatch(getCarList()),
        getAddNum:(id,quantity,selected)=>dispatch(getAddNum(id,quantity,selected)),
        getDelCart:(id)=>dispatch(getDelCart(id)),
        getunSelectAll:()=>dispatch(getunSelectAll()),
        getSelectAll:()=>dispatch(getSelectAll())
    }
}
export default connect (mapState,mapDispatch)(Cart)