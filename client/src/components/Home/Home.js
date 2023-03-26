import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";



export const Home = () => {
    return (
        <div className="home">
            < Header />
            <section id="catalog-section">
    <div className="item">
        <div className="img-container">
            <img src="/images/auction.jpg" alt="welcome page" />
        </div>
        <div className="content">
            <p>Welcome to the online Auction House.</p>
            <p>Buy and sell items in different categories. Browse available items and place your bid. Create a new listing and collect the highest offer.</p>
            <div className="align-center">
                <Link className="action" to="/auctions">Browse Listings</Link>
                <Link className="action" to="/auctions/create">Publish Auction</Link>
            </div>
        </div>
    </div>
</section>
            < Footer />
            </div>
    );
}