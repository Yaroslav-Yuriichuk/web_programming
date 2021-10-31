import { useState } from "react"
import Filters from "./Filters"
import CatalogItem from "./CatalogItem"

const Catalog = () => {

    const [allItems, setAllItems] = useState([
        {id: 1, name: "Acer Nitro 5", price: 23999, weight: 2.4, type: "REGULAR", count: 1},
        {id: 2, name: "Apple Iphone 11", price: 18999, weight: 0.2, type: "REGULAR", count: 2},
        {id: 3, name: "Asus AsusPro", price: 25999, weight: 2.3, type: "REGULAR", count: 1},
        {id: 4, name: "SVS SB-1000 Pro", price: 20440, weight: 10.1, type: "REGULAR", count: 3}
    ])

    const [currentlyDisplayedItems, setCurrentlyDisplayedItems] = useState(allItems)

    return (
        <div className='catalog'>
            <Filters />
            <ul>
                { currentlyDisplayedItems.map(item =>
                    <CatalogItem key={item.id} name={item.name} price={item.price} weight={item.weight}
                    type={item.type} count={item.count}/>)
                }
            </ul>
        </div>
    )
}

export default Catalog
