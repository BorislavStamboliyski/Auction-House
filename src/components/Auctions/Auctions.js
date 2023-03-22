import { useState, useEffect } from "react";
import { AuctionItems } from "../AuctionItems/AuctionItems";
import * as auctionService from '../../services/auctionService'
import { Navigation } from "../Navigation/Navigation";



export const Auctions = () => {

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        auctionService.getAll()
            .then(result => {
                setAuctions(result)
            });
    }, []);

    return (
        <>
        <Navigation/>
        <section className="fruit_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <hr />
                    <h2>
                        Auctions
                    </h2>
                </div>
            </div>
            <div className="container-fluid">

                <div className="fruit_container">
                    {auctions.length !== 0 ?
                        auctions.map((x) => <AuctionItems key={x._id}  {...x} />)
                        : <div>Nothing has been listed yet. Be the first!</div>}
                </div>
            </div>
        </section>
        </>
    );
}