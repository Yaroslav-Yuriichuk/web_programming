import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CheckoutForm from './CheckoutForm'
import CheckoutItems from './CheckoutItems'
import ScrollToTop from "./ScrollToTop"

const CheckoutPage = ({ allItemsMap }) => {

    const cart = useSelector(state => state.cart)
    const reducer = (previous, current) => previous
        + allItemsMap[current.id].price * allItemsMap[current.id].item_count * current.quantity
    const [total, setTotal] = useState(() => 0)

    useEffect(() => {
        setTotal(cart.reduce(reducer, 0))
    }, [])

    return (
        <div className="checkout-page">
            <ScrollToTop />
            <CheckoutForm />
            <div>
                <h2>Your items</h2>
                <CheckoutItems allItemsMap={allItemsMap}/>
                <h4>Total: {total} hrn.</h4>
            </div>
        </div>
    )
}

export default CheckoutPage
