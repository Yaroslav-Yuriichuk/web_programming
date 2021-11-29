import React from 'react'
import item_image from "./assets/box-of-items.jpg"

const CheckoutItem = ({ name, price, item_count, countInCart }) => {
    return (
        <div className="checkout-item">
            <img className="checkout-item__image" src={item_image} alt="Item"/>
            <div className="checkout-item__info">
                <h3>{name}</h3>
                <label>{countInCart} x {item_count} x {price} hrn.</label>
                <label>Total: {countInCart * item_count * price} hrn.</label>
            </div>
        </div>
    )
}

export default CheckoutItem
