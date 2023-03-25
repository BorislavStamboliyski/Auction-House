import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";


export const Header = () => {
    return (
        <>
        <div className="hero_area">
            <div className="brand_box">
                <Link className="navbar-brand" to="/">
                    <span>
                        Auction House
                    </span>
                </Link>
          
            </div>
        </div>
        <Navigation/>
        </>
    );
}