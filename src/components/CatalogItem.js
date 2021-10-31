import React from 'react'
import item_image from "./assets/box-of-items.jpg"

const CatalogItem = ({name, price, weight, type, count }) => {
    return (
        <div className='catalog-item'>
            <img className="item-image" src={item_image} alt="Item"/>
            <div className="item-description">
                <h3 className="item-name">{name}</h3>
                <label className="item-price">Price: {price} hrn.</label>
                <label className="item-price">Total price: {count * price} hrn.</label>
                <label className="item-weight">Weight: {Math.round(weight * 100) / 100} kg</label>
                <label className="item-weight">Total weight: {Math.round(count * weight * 100) / 100} kg</label>
                <label className="item-type">Type: {type}</label>
                <label className="item-count">Ammount: {count}</label>
            </div>
        </div>
    )
}

export default CatalogItem
