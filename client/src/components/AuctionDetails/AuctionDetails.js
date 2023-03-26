import { useEffect, useReducer, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { useUserContext } from "../../contexts/userContext";
import { Button } from "react-bootstrap";

import * as auctionService from '../../services/auctionService'
import * as bidService from '../../services/bidService'

import { Bid } from './Bids/Bid'
import { auctionReducer } from "../../reducers/auctionReducer";

// To fix categories to have better name!!
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

                
            } else {
                setError(true);
            }
        } else {
            const bid = await bidService.postBid(auctionId, formValues.bid, token)
            dispatch({
                type: 'ADD_BID',
                payload: bid,
                username,
            });
            setBidform(false)
        }
    }
    const isOwner = userId === auction._ownerId;

    let higherBidder = {};
    if (auction.bids?.length) {
        higherBidder = auction.bids.reduce((prev, curr) => Number(prev.bid) > Number(curr.bid) ? prev : curr);
    }

    return (
        <>{bidForm &&
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
                                        <h4>Starting Price: {auction.price}$</h4>
                                    </div>
                                    <article>
                                        <p>
                                            {auction.summary}
                                        </p>
                                        {isAuthenticated && auction.bids?.length &&
                                            (<div>Current highest bid: {`${higherBidder.bid}`}$ by {`${higherBidder.bidder.username}`}</div>)
                                        }
                                        {isAuthenticated && !auction.bids?.length &&
                                            (<div>No current bids</div>)}
                                    </article>
                                    {isOwner && auction.bids?.length === 0 &&
                                        (<Link to={`/auctions/edit/${auction._id}`}> Edit </Link>)}
                                    {isOwner &&
                                        (<Link to={`/auctions/close/${auction._id}`}> Close Auction </Link>)}
                                    {isAuthenticated && !isOwner &&
                                        (<Link to={`/auctions/${auctionId}`} onClick={onBidClick}> Bid </Link>)}
                                    <Link to="/auctions"> Back </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            );
}