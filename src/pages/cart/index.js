import React from 'react'
import CatHeader from '../../components/catheader'
import {connect} from 'react-redux'
import {getCarList} from '../../store/actions'
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
        this.setState({
            selectedAll:cartData.selectedAll,//全选
            cartTotalQuantity:cartData.cartTotalQuantity,//总数
            cartTotalPrice:cartData.cartTotalPrice,//总钱数
            cartProductVoList:cartData.cartProductVoList,//数据
            selectNum:0
        })
    }
    desc=(data)=>{

    }
    add=(data)=>{

    }
    del=(data)=>{

    }
    order=()=>{}
    render(){
        const {cartProductVoList,cartTotalPrice,cartTotalQuantity,selectNum}=this.state
        return(
            <div class="cart">
            <CatHeader />
            <div class="wrapper">
          <div class="container">
            <div class="cart-box">
              {/* <ul class="cart-item-head">
                <li class="col-1">
                    <span class="checkbox" v-bind:class="{'checked':selectedAll}" @click="toggleAll"></span>全选</li>
                <li class="col-3">商品名称</li>
                <li class="col-1">单价</li>
                <li class="col-2">数量</li>
                <li class="col-1">小计</li>
                <li class="col-1">操作</li>
              </ul> */}
              <ul class="cart-item-list">
                  {
                      cartProductVoList&&cartProductVoList.length>0?cartProductVoList.map((item,index)=>(
                        <li class="cart-item"  key={index}>
                        <div class="item-check">
                          {/* <span class="checkbox" :class="{'checked':item.productSelected}" @click="changeChecked(item)"></span> */}
                        </div>
                        <div class="item-name">
                          <img src={item.productMainImage} alt=""/>
                          <span>{item.productName +' , '+ item.productSubtitle}</span>
                        </div>
                        <div class="item-price">{item.productPrice}元</div>
                        <div class="item-num">
                          <div class="num-box">
                            <a href="javascript:;" onClick={()=>this.desc(item)}>-</a>
                            <span>{item.quantity}</span>
                            <a href="javascript:;" onClick={()=>this.add(item)}>>+</a>
                          </div>
                        </div>
                        <div class="item-total">{item.productTotalPrice}元</div>
                        <div class="item-del" onClick={()=>this.del(item)}>></div>
                      </li>
                      )):''
                  }
               
              </ul>
            </div>
             <div class="order-wrap clearfix">
               <div class="cart-tip fl">
                 <a href="/">继续购物</a>
                 共<span>{cartTotalQuantity}</span>件商品，已选择<span>{selectNum}</span>件
               </div>
               <div class="total fr">
                合计：<span>{cartTotalPrice}</span>元
                 <a href="javascript:;" class="btn" onClick={()=>this.order()}>去结算</a>
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
        getCarList:()=>dispatch(getCarList())
    }
}
export default connect (mapState,mapDispatch)(Cart)