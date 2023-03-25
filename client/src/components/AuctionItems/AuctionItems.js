import { Link } from "react-router-dom";


export const AuctionItems = ({
    _id,
    name,
    imageUrl,
}) => {
    return (


        <div className="box">
            <img src={imageUrl}alt="" />
            <div className="link_box">
                <h5>
                    {name}
                </h5>
                <Link to={`/auctions/${_id}`}>
                    Details
                </Link>
            </div>
        </div>);
}