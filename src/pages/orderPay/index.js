import React from 'react'
import './index.scss'
import {orders} from '../../request/http'
import {connect}from 'react-redux'
class OrderPay extends React.Component{
    state={
        data:'',
        num:''
    }
    componentDidMount(){
        let pathname=this.props.location.pathname
        let num=pathname.replace('/order/orderPay/','')
        this.setState({
            num
        })
        orders(num).then(res=>{
            console.log(res)
            this.setState({
                data:res
            })
        })
       
    }
    render(){
     
        const {data,num}=this.state
        console.log(data)
        return(
            <div className="orderPay">
           
           <div className="wrapper">
          <div className="container">
            <div className="order-wrap">
              <div className="item-order">
                <div className="icon-succ"></div>
                <div className="order-info">
                  <h2>订单提交成功！去付款咯～</h2>
                  <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
                  <p>收货信息：{data.receiverName}</p>
                </div>
                <div className="order-total">
        <p>应付总额：<span>{data.payment}</span>元</p>
                 <p>订单详情<em className="icon-down "></em></p> 
                </div>
              </div>
              <div className="item-detail" v-if="showDetail">
                <div className="item">
                  <div className="detail-title">订单号：</div>
                  <div className="detail-info theme-color">{num}</div>
                </div>
                <div className="item">
                  <div className="detail-title">收货信息：</div>
        <div className="detail-info">{data.receiverName}</div>
                </div>
                <div className="item good">
                  <div className="detail-title">商品名称：</div>
                  <div className="detail-info">
                    <ul>
                        {console.log(data.orderItemVoList,9)}
                        {
                            data.orderItemVoList&&data.orderItemVoList.length>0?data.orderItemVoList.map((item,index)=>(
                                <li key={index}>
                                <img src={item.productImage}/>{item.productName}
                              </li>
                            )):''
                        }
                     
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="detail-title">发票信息：</div>
                  <div className="detail-info">电子发票 个人</div>
                </div>
              </div>
            </div>
            <div className="item-pay">
              <h3>选择以下支付方式付款</h3>
              <div className="pay-way">
                <p>支付平台</p>
                <div className="pay pay-ali " ></div>
                <div className="pay pay-wechat"></div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        )
    }
}
export default OrderPay