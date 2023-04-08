import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="home">
            <section id="catalog-section">
                <div className="item">
                    <div className="img-container">
                        <img src="/images/auction.jpg" alt="welcome page" />
                    </div>
                    <div className="content">
                        <h1>
                            Uh oh,<br /> something broke.
                        </h1>

                        <h3>Error 404 - page not found.</h3>
                        <div className="align-center">
                            <Link to="/" className="action">
                                Return to Auction House
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}