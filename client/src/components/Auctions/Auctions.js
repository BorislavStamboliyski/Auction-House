
import { AuctionItems } from "./AuctionItems/AuctionItems";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useAuctionContext } from "../../contexts/auctionContext";




export const Auctions = () => {

    const {auctions} = useAuctionContext();
    
    return (
        <>
        <Header/>
        <section className="auction_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Auctions
                    </h2>
                </div>
            </div>
            <div className="container-fluid">

                <div className="auction_container">
                    {auctions.length !== 0 ?
                        auctions.map((x) => <AuctionItems key={x._id}  {...x} />)
                        : <div>Nothing has been listed yet. Be the first!</div>}
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}