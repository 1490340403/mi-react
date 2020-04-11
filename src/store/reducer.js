import {
    USER_INFO,
    HOME_DATA,
    PRO_DETAIL,
    CART_LIST,
    ADDRESS
} from './actionType.js'
const defaultState={
    num:1
}
export default(state=defaultState,action)=>{
    switch(action.type){
       case HOME_DATA:
            return{
                ...state,
                num:action.num
            }
        default:
            return state
    }
   
}