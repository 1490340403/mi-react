import {
    USER_INFO,
    HOME_DATA,
    PRO_DETAIL,
    CART_LIST,
    ADDRESS
} from './actionType.js'
// const initAction=()=>({
//     type:HOME_DATA,
//     list:2
// })
// export const initData=()=>{
//     return dispatch=>{
//         setTimeout(()=>{
//             dispatch(initAction())
//         },1000)
//     }
// }
 const changeBtnTextType = () => ({ type: HOME_DATA, num: 2})
export const changeBtnText=()=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(changeBtnTextType())
        },1000)
    }
}
     
   