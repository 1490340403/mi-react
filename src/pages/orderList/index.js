import React from 'react'
import './index.scss'
import {orderList} from '../../request/http'
import {connect} from 'react-redux'
import {getOrderList} from '../../store/actions'

class OrderList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:props.orderList
        }
    }
   componentDidMount(){

         this.props.getOrderList(1)
        
        
        // if(this.props.orderList&&this.props.orderList.total>0){
        //     console.log(this.props.orderList,998)
        // }
        
    }
    render(){
        console.log(this.state.data,888)
        return(
        <div className="order-list">
         {/* <div className="wrapper">
          <div className="container" ref="bscroll">
            <div className="order-box"  >
               <!-- <Loading v-if="loding"/> -->
              <div className="order" v-for="(item,index) in list" :key="index">
                <div className="order-title">
                  <div className="item-info fl">
                     {item.createTime}
                    <span>|</span>
                     {item.receiverName}
                    <span>|</span>
                    订单号：{{item.orderNo}
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
                    <div className="good-list" v-for="(items,indexs) in item.orderItemVoList" :key='indexs'>
                      <div className="good-img">
                         <img src="" alt="" > 
                      </div>
                      <div className="good-name">
                        <div className="p-name">{items.productName}</div>
                        <div className="p-money">{items.totalPrice} X {items.quantity}元</div>
                      </div>
                    </div>
                  </div>
                  <div className="good-state fr">
                    <a href="javascript:;">未支付</a>
                  </div>
                </div>
              </div>
            //    <!-- <NoData v-if="noData"></NoData> -->
         
            </div>
          </div> */}
        {/* </div> */}
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