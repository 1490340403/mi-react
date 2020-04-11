import React from 'react'
import {connect} from 'react-redux'
import {changeBtnText} from '../../store/actions'
class Login extends React.Component{
    componentDidMount(){
        console.log(this.props.num)
    }
    click=()=>{
        
        this.props.changeBtnTexts()
        console.log(this.props)
    }
    render(){
    return(<div onClick={()=>this.click()}>login{this.props.num}</div>)
    }
}
const mapState=(state)=>{
    return {
        num:state.num
    }
}
const mapDispatch=(dispatch)=>{
    return{
        changeBtnTexts:()=>dispatch(changeBtnText())
    }
}
export default connect(mapState,mapDispatch)(Login)