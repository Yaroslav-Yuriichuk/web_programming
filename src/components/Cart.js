import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = ({ allItems }) => {
    const inCart = useSelector(state => state.cart)

    return (
        <div className='cart'>
            {inCart.map(id => <CartItem key={id} />)}
        </div>
    )
}

export default Cart
