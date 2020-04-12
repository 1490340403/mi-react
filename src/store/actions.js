import {
    HEAD_DATA,
    INDEX_SWIPER,
    LOGIN,
    ADD_CAR,
    GET_INFO,
    USER_INFO,
    HOME_DATA,
    PRO_DETAIL,
    CART_LIST,
    ADDRESS,
    SLIDE_DATA
} from './actionType.js'
import cookie from 'react-cookies'
import {proDetail,slideData,proDetails,login,info,addCart} from '../request/http'
 const changeBtnTextType = () => ({ type: HOME_DATA, num: 2})
export const changeBtnText=()=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(changeBtnTextType())
        },1000)
    }
}
const headData_type=(data)=>({
    type:HEAD_DATA,
    data
})
export const getHeaderData=()=>{
    return async dispatch=>{
       const data=await proDetail()
       dispatch(headData_type(data.list))
    }
}
const indexSwiper_type=(data)=>({
    type:INDEX_SWIPER,
    data
})
const slideData_type=(data)=>({
    type:SLIDE_DATA,
    data
})
export const getslideData=()=>{
    return async dispatch=>{
        let data= await slideData()
        data.list = data.list.slice(6,14);
        var phoneList = [...data.list.slice(0,4),...data.list.slice(4,8)];
        dispatch(slideData_type(phoneList))
    }
}
const product=(data)=>({
    type:PRO_DETAIL,
    data
})
export const getProductDetail=(id)=>{
    console.log(id,id)
    return async dispatch=>{
        const data=await proDetails(id)
        dispatch(product(data))
    }
}
const login_type=(data)=>({
    type:LOGIN,
    data
})
export const getLogin=(params)=>{
    return async dispatch=>{
        const data=await login(params)
        cookie.save('userId', data.id,1)
        dispatch(login_type(data))
    }
}
export const getInfo=()=>{
    return async dispatch=>{
        const data=await info()
        dispatch(login_type(data))
    }
}
const addCar_type=(data)=>({
    type:ADD_CAR,
    data
})
export const add_car=(productId)=>{
    return async dispatch=>{
        const data = await addCart(productId)
        console.log(data)
        dispatch(addCar_type(data))
    }
}