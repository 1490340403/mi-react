import {
    HEAD_DATA,
    SLIDE_DATA,
    INDEX_SWIPER,
    LOGIN,
    ADD_NUM,
    ADD_CAR,
    USER_INFO,
    HOME_DATA,
    PRO_DETAIL,
    CART_LIST,
    ADDRESS
} from './actionType.js'
const defaultState={
    headerData:[],
    slideData:[],
    indexSwiper:[],
    proDetail:{},
    userInfo:{},
    carList:{},
    cartData:[],
    num:1
}
export default(state=defaultState,action)=>{
    switch(action.type){
       case HOME_DATA:
            return{
                ...state,
                num:action.num
            }
       case HEAD_DATA:
           return {
               ...state,
               headerData:action.data
           }
        case SLIDE_DATA:
            return {
                ...state,
                slideData:action.data
            }
       case INDEX_SWIPER:
           return {
               ...state,
               indexSwiper:action.data
           }
        case PRO_DETAIL:
            return {
                ...state,
                proDetail:action.data
            }
        case LOGIN:
            return {
                ...state,
                userInfo:action.data
            }
        case ADD_CAR:
            return {
                ...state,
                carList:action.data
            }
        case CART_LIST:
            return {
                ...state,
                cartData:action.data
            }
        default:
            return state
    }
   
}