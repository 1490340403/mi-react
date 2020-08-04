import React from 'react'
import CatHeader from '../../components/catheader'
import Footer from '../../components/footer'
import { Route, Switch} from "react-router-dom"
import Alipay from '../alipay'
import Cart from '../cart'
import OrderConfirm from '../orderConfirm'
import OrderList from '../orderList'
import OrderPay from '../orderPay'
function Order(){
    return(<div>
            <CatHeader></CatHeader>
            <Switch>
                <Route path="/order/list" component={OrderList}/>
                <Route path="/order/orderPay/:id" component={OrderPay }/>
                <Route path="/order/orderConfirm" component={OrderConfirm}/>
                <Route path="/order/alipay" component={Alipay}/>
                <Route path="/order/cart" component={Cart}/>
            </Switch>
            <Footer></Footer>
    </div>)
}
export default Order