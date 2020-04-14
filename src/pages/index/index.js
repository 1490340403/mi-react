import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import Home from '../home'
import Product from '../product'
import Detail from '../detail'
import {connect} from 'react-redux'
import {getHeaderData,getInfo} from '../../store/actions'
class Index extends React.Component{
    componentDidMount(){
        this.props.getHeaderData()
        this.props.getInfo()
    }
    logyot=()=>{

    }
    goLogin=()=>{
        this.props.history.push('/login')
    }
    goOrderList=()=>{
        this.props.history.push('/order/cart')
    }
    goCart=()=>{
        
    }
    render(){
        const {headerData,userInfo}=this.props
        const headProps={
            userInfo,
            headerData,
            logyot:this.logyot,
            goLogin:this.goLogin,
            goOrderList:this.goOrderList,
            goCart:this.goCart
        }
        return(<div>
            <Header headeProps={headProps}></Header>
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
const mapState=(state)=>{
    return {
        headerData:state.headerData,
        userInfo:state.userInfo
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getHeaderData:()=>dispatch(getHeaderData()),
        getInfo:()=>dispatch(getInfo())
    }
}
export default connect(mapState,mapDispatch)(Index) 