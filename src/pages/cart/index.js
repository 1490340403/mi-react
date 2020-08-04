import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import { message } from 'antd'
import { getCarList, getAddNum, getDelCart, getunSelectAll, getSelectAll } from '../../store/actions'
function Cart(props) {
  const dispatch = useDispatch()
  const cartData = useSelector(state => state.cartData)
  const [selectedAll, setSelectedAll] = useState(false)
  const [cartTotalQuantity, setCount] = useState(0)
  const [cartTotalPrice, setPrice] = useState(0)
  const [cartProductVoList, setData] = useState([])
  const [selectNum, setNum] = useState(0)
  useEffect(() => {
    dispatch(getCarList())
  }, [])
  const checkNum =useCallback(  () => {
    const cartProductVoList = cartData
    let num = 0
    if (cartProductVoList && cartProductVoList.length > 0) {
      cartProductVoList.map(item => {
        if (item.productSelected) {
          num += item.quantity
        }
      })
    }
    return num
  },[])
  const desc =useCallback( (data) => {
    let quantity = data.quantity - 1
    if (quantity < 1) {
      message.error('最少一个...')
      return
    }
    dispatch(getAddNum(data.productId, quantity))
  },[])
  const add = useCallback( (data) => {
    let quantity = data.quantity + 1
    if (quantity > data.productStock) {
      message.error('超出库存...')
      return
    }
    dispatch(getAddNum(data.productId, quantity))
  },[])
  const del = useCallback( (data) => {
    dispatch(getDelCart(data.productId))
  },[])
  const changeChecked = useCallback( (data) => {
    let selected = !data.productSelected
    let quantity = data.quantity
    dispatch(getAddNum(data.productId, quantity, selected))
  },[])
  const toggleAll = useCallback( () => {
    let selectedAll = cartData.selectedAll
    if (selectedAll) {
      dispatch(getunSelectAll())
    } else {
      dispatch(getSelectAll())
    }
  },[])
  const order = () => { }
  return (
    <div className="cart">

      <div className="wrapper">
        <div className="container">
          <div className="cart-box">
            <ul className="cart-item-head">
              <li className="col-1">
                <span className={cartData.selectedAll ? "checked checkbox" : "checkbox"} onClick={() => toggleAll()}></span>全选</li>
              <li className="col-3">商品名称</li>
              <li className="col-1">单价</li>
              <li className="col-2">数量</li>
              <li className="col-1">小计</li>
              <li className="col-1">操作</li>
            </ul>
            <ul className="cart-item-list">
              {
                cartData.cartProductVoList && cartData.cartProductVoList.length > 0 ? cartData.cartProductVoList.map((item, index) => (
                  <li className="cart-item" key={index}>
                    <div className="item-check">
                      <span className={item.productSelected ? 'checked checkbox' : 'checkbox'} onClick={() => changeChecked(item)}></span>
                    </div>
                    <div className="item-name">
                      <img src={item.productMainImage} alt="" />
                      <span>{item.productName + ' , ' + item.productSubtitle}</span>
                    </div>
                    <div className="item-price">{item.productPrice}元</div>
                    <div className="item-num">
                      <div className="num-box">
                        <a href="javascript:;" onClick={() => desc(item)}>-</a>
                        <span>{item.quantity}</span>
                        <a href="javascript:;" onClick={() => add(item)}>+</a>
                      </div>
                    </div>
                    <div className="item-total">{item.productTotalPrice}元</div>
                    <div className="item-del" onClick={() => del(item)}></div>
                  </li>
                )) : ''
              }
            </ul>
          </div>
          <div className="order-wrap clearfix">
            <div className="cart-tip fl">
              <a href="/">继续购物</a>
                 共<span>{cartData.cartTotalQuantity}</span>件商品，已选择<span>{checkNum()}</span>件
               </div>
            <div className="total fr">
              合计：<span>{cartData.cartTotalPrice}</span>元
                 <a href="javascript:;" className="btn" onClick={order}>去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart