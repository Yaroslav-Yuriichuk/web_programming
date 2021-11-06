import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import ItemPage from "./components/ItemPage"
import Footer from "./components/Footer"
import { useState } from "react"

const App = () => {

    const [allItems, setAllItems] = useState([
        {id: 1, name: "Acer Nitro 5", price: 23999, weight: 2.4, type: "REGULAR", count: 1},
        {id: 2, name: "Apple Iphone 11", price: 18999, weight: 0.2, type: "REGULAR", count: 2},
        {id: 3, name: "Asus AsusPro", price: 25999, weight: 2.3, type: "REGULAR", count: 1},
        {id: 4, name: "SVS SB-1000 Pro", price: 20440, weight: 10.1, type: "REGULAR", count: 3}
    ])

    const [currentlyDisplayedItems, setCurrentlyDisplayedItems] = useState(allItems)

    return (
        <HashRouter>
            <div className='container'>
                <Header />
                <div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/catalog' render={props => <Catalog {...props}
                        allItems={allItems} currentlyDisplayedItems={currentlyDisplayedItems}
                        setAllItems={setAllItems} setCurrentlyDisplayedItems={setCurrentlyDisplayedItems}
                        />}></Route>
                    <Route path='/item/:id' render={props => <ItemPage {...props} allItems={allItems}/>}></Route>
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App
