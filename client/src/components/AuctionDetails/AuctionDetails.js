import { useEffect, useReducer, useState } from "react";
import { useParams, Link } from "react-router-dom"

import { Button } from "react-bootstrap";

import { useUserContext } from "../../contexts/userContext";
import * as auctionService from '../../services/auctionService'
import * as bidService from '../../services/bidService'

import { Bid } from './Bids/Bid'
import { auctionReducer } from "../../reducers/auctionReducer";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";


export const AuctionDetails = () => {

    const { userId, isAuthenticated, token, username } = useUserContext();
    const { auctionId } = useParams();
    const [auction, dispatch] = useReducer(auctionReducer, {})
    const [bidForm, setBidform] = useState(false)
    const [error, setError] = useState(false);



    useEffect(() => {
        Promise.all([
            auctionService.getAuction(auctionId),
            bidService.getBids(auctionId)
        ]).then(([auctionData, bids]) => {
            const auctionState = {
                ...auctionData,
                bids,
            }

            dispatch({ type: 'FETCH_AUCTION', payload: auctionState })
        });

    }, [auctionId])

    const onBidClick = () => {

        setBidform(true);

    }

    const onCancelClick = () => {
        setBidform(false);
        setError(false)
    }

    const onOkClick = () => {
        setError(false);
    }

    const onBidSubmit = async (e, formValues) => {
        e.preventDefault();
   
        if (Number(higherBidder.bid)) {
            if (Number(formValues.bid) > Number(higherBidder.bid) && Number(formValues.bid) > Number(auction.price)) {
                const bid = await bidService.postBid(auctionId, formValues.bid, token)
                dispatch({
                    type: 'ADD_BID',
                    payload: bid,
                    username,
                });
                setBidform(false);
                setError(false);
                
            } else {
                setError(true);
            }
        } else if (!Number(higherBidder.bid) && Number(formValues.bid) > Number(auction.price)){
            const bid = await bidService.postBid(auctionId, formValues.bid, token)
            dispatch({
                type: 'ADD_BID',
                payload: bid,
                username,
            });
            setBidform(false)
            setError(false)
        } else {
            setError(true);
        }
    }
    const isOwner = userId === auction._ownerId;

    let higherBidder = {};
    if (auction.bids?.length) {
        higherBidder = auction.bids.reduce((prev, curr) => Number(prev.bid) > Number(curr.bid) ? prev : curr);
    }


    return (
        <>
        <Header/>
        {bidForm &&
            (<div className="overlay">
                <div className="overlay-content">
                    <Bid onBidSubmit={onBidSubmit} onCancelClick={onCancelClick} />
                    {error && (
                        <div className="error-bidding">Your bid should be higher than previous bid or starting price!
                        <div className="error-bidding-button" >
                            <Button variant="primary" type="button"  onClick={onOkClick}>
                                OK
                            </Button>
                            </div>    
                        </div>
                    )}
                    </div>
                </div>)}
                <section className="details-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-container">
                                <div className="img-overlay">
                                    <img src={auction.imageUrl} alt={`${auction.name}`} />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="details-container">
                                    <div className="details-header">
                                        <h2>
                                           Auction Item: {auction.name}
                                        </h2>
                                        <h4>Category:  {auction.category}</h4>
                                        <h4>Starting Price: {auction.price}$</h4>
                                    </div>
                                    <div className="details-content">
                                        <h4>Summary:</h4>
                                        <p>
                                            {auction.summary}
                                        </p>
                                        {isAuthenticated ?
                                            auction.bids?.length ?
                                            <div className="current_bidders">Current highest bid: {`${higherBidder.bid}`}$ by {`${higherBidder.bidder.username}`}</div>
                                            :<div className="current_bidders">No current bids</div>
                                            : (<p className="text-center mt-5 mb-0">To participate in bidding Log in first! <Link to="/login"
                                            className="fw-bold text-body"><u>Login here</u></Link></p>)
                                        }
                                    </div>
                                    {isOwner && auction.bids?.length ===0 &&
                                        (<Link to={`/auctions/edit/${auction._id}`} className="edit-link"> Edit </Link>)}
                                    {isOwner &&
                                        (<Link to={`/auctions/close/${auction._id}`} className="close-link"> Close Auction </Link>)}
                                    {isAuthenticated && !isOwner &&
                                        (<Link to={`/auctions/${auctionId}`} className="bid-link" onClick={onBidClick}> Bid </Link>)}
                                    <Link to="/auctions" className="back-link"> Back </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
            );
}