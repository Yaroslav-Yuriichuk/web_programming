import React from 'react'
import { useSelector } from 'react-redux'
import item_image from "./assets/box-of-items.jpg"

const CartItem = ({ id, name, price, item_count }) => {

    const cart = useSelector(state => state.cart)
    const quantityInCart = cart.find(({ idInCart, quantity }) => idInCart == id).quantity

    return (
        <div className="cart-item">
            <img className="cart-item-image" src={item_image} alt="Item"/>
            <h3>{name}</h3>
            <button>-</button>
            <h4>{quantityInCart}</h4>
            <button>+</button>
        </div>
    )
}

export default CartItem
