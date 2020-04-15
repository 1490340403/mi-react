import React from 'react'
import CatHeader from '../../components/catheader'
import Footer from '../../components/footer'
import { Route, Switch, Redirect} from "react-router-dom"
import Alipay from '../alipay'
import Cart from '../cart'
import OrderConfirm from '../orderConfirm'
import OrderList from '../orderList'
import OrderPay from '../orderPay'
class Order extends React.Component{
    render(){
        return(<div>
             <CatHeader></CatHeader>
              <Switch>
                  <Route path="/order/list" component={OrderList}/>
                  <Route path="/order/orderPay" component={OrderPay }/>
                  <Route path="/order/orderConfirm" component={OrderConfirm}/>
                  <Route path="/order/alipay" component={Alipay}/>
                  <Route path="/order/cart" component={Cart}/>
              </Switch>
             <Footer></Footer>
        </div>)
    }
}
export default Order