import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import Home from '../home'
import Product from '../product'
import Detail from '../detail'
class Index extends React.Component{
    render(){
        return(<div>
            <Header></Header>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/product" component={Product}/>
                <Route path="/detail" component={Detail}/>
                <Redirect from="/" to="/home" />
                <Route component={Home} />
            </Switch>
            <Footer></Footer>
        </div>)
    }
}
export default Index