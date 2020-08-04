import React,{useEffect} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Home from '../home'
import Product from '../product'
import Detail from '../detail'
import {useSelector,useDispatch} from 'react-redux'
import {getHeaderData,getInfo} from '../../store/actions'
function Index(props){
    const dispatch = useDispatch();
    const headerData=useSelector(state => state.headerData)
    const userInfo=useSelector(state => state.userInfo)
    useEffect(()=>{
        dispatch(getHeaderData())
        dispatch(getInfo())
    },[])
    function logyot (){
        console.log('退出了...')
    }
    function goLogin(){
        props.history.push('/login')
    }
    function goOrderList(){
        props.history.push('/order/list')
    }
    function goCart(){
        console.log('去购物车...')
    }
  
        const headProps={
            userInfo,
            headerData,
            logyot:logyot,
            goLogin:goLogin,
            goOrderList:goOrderList,
            goCart:goCart
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

export default Index