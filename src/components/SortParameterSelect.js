import React from 'react'

const SortParameterSelect = () => {
    return (
        <select>
            <option value='single-name'>name</option>
            <option value='single-price'>single price</option>
            <option value='total-price'>total price</option>
            <option value='single-weight'>single weight</option>
            <option value='total-weight'>total weight</option>
        </select>
    )
}

export default SortParameterSelect
