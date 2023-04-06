import { Link } from "react-router-dom";

import { useState } from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";



export const About = () => {

    const [readMore, setRead] = useState(false);

    const onClick = () => {
        setRead(state => !state)
    }


    return (
        <>
        
            <Header />
            <section className="about_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <div className="img-box">
                                <img src="/images/thirdImg.jpg" alt="Img_1" className="active" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>About Our Auction House</h2>
                                </div>
                                <p>
                                    Welcome to our auction house! We specialize in selling a wide range of goods and services through the public auction process. Our team of experts evaluates and authenticates items to ensure that they are genuine and of high value.
                                </p>
                                {readMore && (
                                    <>
                                        <p>
                                            We conduct auctions both in-person and online, allowing bidders from all over the world to participate in the bidding process. Our experienced auctioneers are here to assist you and ensure a fair and transparent auction process.
                                        </p>
                                        <p>
                                            We charge a commission on the final sale price of items, which is typically shared between the auction house and the seller. We believe that auctions are an exciting and efficient way to sell and buy high-value items, and we have a long history of playing an important role in the art market and the sale of other valuable goods.
                                        </p>
                                        <p>
                                            Thank you for choosing our auction house, and we look forward to assisting you in your buying and selling needs!
                                        </p>
                                    </>)}

                                <Link to="/about" className="read_more" onClick={onClick}>
                                    {!readMore ? 'Read More' : 'Read Less'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
}