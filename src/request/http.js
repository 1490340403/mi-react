import axios from './index'
export const register=(url,params)=>axios.post(url,params)
export const getIndexData=(url,params={})=>axios.get(url,{
    params:{
        params
    }
})
export const proDetail=(url,params={})=>axios.get(url,{
    params:{
        params
    }
})