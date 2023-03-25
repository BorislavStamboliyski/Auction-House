import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";



export const About = () => {

    

    return (
        
        <section className="about_section">
            <Navigation />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img-box">
                            <img src="images/download.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="detail-box">
                            <div className="heading_container">
                                <hr />
                                <h2>
                                    About Our Auction House
                                </h2>
                            </div>
                            <p>
                                Welcome to our auction house! We specialize in selling a wide range of goods and services through the public auction process. Our team of experts evaluates and authenticates items to ensure that they are genuine and of high value.
                            </p>
                            <p>
                                We conduct auctions both in-person and online, allowing bidders from all over the world to participate in the bidding process. Our experienced auctioneers are here to assist you and ensure a fair and transparent auction process.
                            </p>
                            <p>
                                We charge a commission on the final sale price of items, which is typically shared between the auction house and the seller. We believe that auctions are an exciting and efficient way to sell and buy high-value items, and we have a long history of playing an important role in the art market and the sale of other valuable goods.
                            </p>
                            <p>
                                Thank you for choosing our auction house, and we look forward to assisting you in your buying and selling needs!
                            </p>
                            <Link to="/">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}