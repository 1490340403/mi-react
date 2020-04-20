import axios from './index'
//注册
export const register=(params)=>axios.post('/user/register',params)
//登录
export const login=(params)=>axios.post('/user/login',params)
//退出登录
export const info=()=>axios.get('/user')
export const logout=()=>axios.post('/user/logout')
//获取首页列表数据
export const getHomeData=(params={pageSize:10,pageNum:1})=>axios.get('/products',{
    params:{
        params
    }
})
//获取产品
export const proDetail=()=>axios.get(`/products`,{
    params:{
        categoryId:'100012',
        pageSize:6
    }
})
//获取产品详情
export const proDetails=(categoryId)=>axios.get(`/products/${categoryId}`)
//首页轮播
export const slideData=()=>axios.get('/products',{
    params:{
        categoryId:100012,
        pageSize:14
    }
})
// //购物车列表
 export const cartList=()=>axios.get('/carts')
 //订单列表
 export const  orderList=(pageNum=1)=>axios.get('/orders',{
     params:{
        pageSize:10,
        pageNum
     }
 })
// 购物车加商品
export const addCart=(productId)=>axios.post('/carts',{selected:true,productId})
// //更新购物城产品
 export const updateNum=(productId,quantity,selected=true)=>axios.put(`/carts/${productId}`,{quantity,selected})
// //移除购物车某个产品
 export const deleteCart=(productId)=>axios.delete(`/carts/${productId}`)
// //购物车全选中
 export const selectAll=()=>axios.put('/carts/selectAll')
// //购物车全部不选中
 export const unSelectAll=()=>axios.put('/carts/unSelectAll')
// //获取购物中所有商品数量总和
// export const Sum=()=>axios.get('/carts/products/sum')
// //添加地址
 export const address=(params)=>axios.post(`/shippings`,params)
 // //修改地址
 export const editaddress=(params,id)=>axios.put(`/shippings/${id}`,params)
// //删除地址
 export const delAddress=(shippingId)=>axios.delete(`/shippings/${shippingId}`)
// //登录状态更新地址
// export const updateAddress=(shippingId,params)=>axios.put(`/shippings/${shippingId}`,params)
// //选中查看具体的地址
// export const lookAddress=(shippingId)=>axios.get(`/shipping/${shippingId}`)
// //地址列表
export const addressList=()=>axios.get('/shippings')
// //支付方式
// export const pay=(params)=>axios.post('/pay',params)