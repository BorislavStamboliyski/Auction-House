
import { AuctionItems } from "./AuctionItems/AuctionItems";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useAuctionContext } from "../../contexts/auctionContext";
import { useMemo, useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import { Loader } from "../Loader/Loader";




export const Auctions = () => {

    const { auctions } = useAuctionContext();
    const [selectedCategory, setSelectedCategory] = useState();
    const {loader} = useUserContext();

    const getFilterList = () => {
        if (!selectedCategory) {
            return auctions;
        }
        return auctions.filter((x => x.category === selectedCategory))
    }

    const filterlist = useMemo(getFilterList, [auctions, selectedCategory])

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value);
    }

    return (
        <>
            <Header />
            <section className="auction_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Auctions
                        </h2>
                        {loader && <Loader />}
                        <div className="filter-container">
                            <div className='filter'>Filter by Category:</div>
                            <div>
                                <select
                                    name="category-list"
                                    id="category-list"
                                    onChange={handleCategoryChange}
                                >
                                    <option value="">All</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Vehicles">Vehicles</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Tools and Machinery">Tools and Machinery</option>
                                    <option value="Jewelry">Jewelry</option>
                                    <option value="Sporting goods and Equipment">Sporting goods and Equipment</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">

                    <div className="auction_container">
                        {filterlist.length !== 0 ?
                            filterlist.map((x) => <AuctionItems key={x._id}  {...x} />)
                            : <div className="no_auction">Nothing has been listed yet. Be the first!</div>}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}