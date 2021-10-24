import Heading from "./Heading"
import MayLikeItem from "./MayLikeItem"

const Home = () => {
    return (
        <div className='home'>
            <Heading />
            <section className='may-like-items'>
                <h1>You may be interested</h1>
                <ul>
                    <MayLikeItem />
                    <MayLikeItem />
                    <MayLikeItem />
                    <MayLikeItem />
                </ul>
                <div className='view-more'>
                    <button className='may-like-items__view-more-button'>View more</button>
                </div>    
            </section>
        </div>
    )
}

export default Home
