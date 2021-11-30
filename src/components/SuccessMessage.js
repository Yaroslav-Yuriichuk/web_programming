import React from 'react'
import item_image from "./assets/box-of-items.jpg"

const SuccessMessage = () => {
    return (
        <div className="success-message">
            <img className="success-image" src={item_image} alt="Item"/>
            <p>Your order has been successfully completed!</p>
        </div>
    )
}

export default SuccessMessage
