import React from 'react'
import item_image from "./assets/box-of-items.jpg"

const MayLikeItem = () => {
    return (
        <div className='may-like-item'>
            <img src={item_image} alt='item'/>
            <h2>Item</h2>
            <p>
                Gravida rutrum quisque non tellus orci 
                ac. A condimentum vitae sapien 
                pellentesque habitant morbi. Porttitor 
                leo a diam sollicitudin tempor.
            </p>
        </div>
    )
}

export default MayLikeItem
