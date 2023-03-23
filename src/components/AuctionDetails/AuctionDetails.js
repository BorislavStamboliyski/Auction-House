import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import * as auctionService from '../../services/auctionService'
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

// To fix categories to have better name!!
export const AuctionDetails = () => {

    const {user} = useContext(userContext);
    const { auctionId } = useParams();
    const [auction, setAuction] = useState({});
    useEffect( () => {
       auctionService.getAuction(auctionId)
        .then(result => {
            setAuction(result);
            
       })

    }, [auctionId])

    const isOwner = user?._id === auction._ownerId;

    return (
        <section className="details_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img-box">
                            <img src={auction.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="detail-box">
                            <div className="heading_container">
                                <hr />
                                <h2>
                                    {auction.name}
                                </h2>
                                <h4>Category:  {auction.category}</h4>
                                <h4>Price: {auction.price} $</h4>
                            </div>
                            <article>
                            <p>
                                {auction.summary}
                            </p>
                            </article>
                            { isOwner &&<Link to={`/auctions/edit/${auction._id}`}> Edit </Link>}
                            {/* Delete can be changed to buton!!! stay as link!!! can make a disabled edit form!!! */}
                            {isOwner && <Link to={`/auctions/close/${auction._id}`}> Close Auction </Link> }
                            {user &&<Link to="/"> Bid </Link> }
                            <Link to="/auctions"> Back </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}