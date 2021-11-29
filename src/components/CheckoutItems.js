import React from 'react'
import CheckoutItem from './CheckoutItem'
import { useSelector } from 'react-redux'

const CheckoutItems = ({ allItemsMap }) => {
    const cart = useSelector(state => state.cart)

    return (
        <div className="checkout-items">
            {
                cart.map(item => <CheckoutItem key={item.id} name={allItemsMap[item.id].name}
                    price={allItemsMap[item.id].price} item_count={allItemsMap[item.id].item_count}
                    countInCart={item.quantity}/>)
            }
        </div>
    )
}

export default CheckoutItems
