import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import Item from "./components/Item"
import Footer from "./components/Footer"

const App = () => {
    return (
        <HashRouter>
            <div className='container'>
                <Header />
                <div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/catalog' component={Catalog}></Route>
                    <Route exact path='/item' component={Item}></Route>
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App
