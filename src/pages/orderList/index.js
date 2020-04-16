import React from 'react'
import './index.scss'
import {orderList} from '../../request/http'
import {connect} from 'react-redux'
import { Pagination } from 'antd';

import {getOrderList} from '../../store/actions'

class OrderList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    changeSize=(num)=>{
      this.props.getOrderList(num)
    }
   componentDidMount(){

         this.props.getOrderList(1)
        
        
        // if(this.props.orderList&&this.props.orderList.total>0){
        //     console.log(this.props.orderList,998)
        // }
        
    }
    render(){
        const {list,pageNum,total}=this.props.orderList
        return(
        <div className="order-list">
          <div className="wrapper">
          <div className="container">
            <div className="order-box"  >
                {
                  list&&list.length>0?list.map((item,index)=>(
                    <div className="order"  key={index}>
                <div className="order-title">
                  <div className="item-info fl">
                     {item.createTime}
                    <span>|</span>
                     {item.receiverName}
                    <span>|</span>
                    订单号：{item.orderNo}
                    <span>|</span>
                    {item.paymentTypeDesc}
                  </div>
                  <div className="item-money fr">
                    <span>应付金额：</span>
                    <span className="money">{item.payment}</span>
                    <span>元</span>
                  </div>
                </div>
                <div className="order-content clearfix">
                  <div className="good-box fl">
                    {
                      item.orderItemVoList.map((items,indexs)=>(
                        <div className="good-list"  key={indexs}>
                        <div className="good-img">
                           <img src={items.productImage} alt="" /> 
                        </div>
                        <div className="good-name">
                          <div className="p-name">{items.productName}</div>
                          <div className="p-money">{items.totalPrice} X {items.quantity}个</div>
                        </div>
                      </div>
                      ))
                    }
                  
                  <div className="good-state fr">
                  <a href="javascript:;">{item.statusDesc}</a>
                  </div>
                </div>
              </div>
              </div>
                  )):''
                }
          
         </div>
           </div>
           <Pagination defaultCurrent={1} current={pageNum} onChange={(pageNum)=>this.changeSize(pageNum)} total={total} />
         </div> 
        
      </div>)
    }
}
const mapState=(state)=>{
    return {
        orderList:state.orderList
    }
}
const mapDiapatch=(dispatch)=>{
    return{
        getOrderList:(pageNum)=>dispatch(getOrderList(pageNum))
    }
}
export default connect(mapState,mapDiapatch)(OrderList) 