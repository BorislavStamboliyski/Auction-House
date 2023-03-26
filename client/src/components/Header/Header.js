import { Navigation } from "../Navigation/Navigation";


export const Header = () => {
    return (
        <div className="header">
        <div className="hero_area">
            <div className="brand_box">
                <div className="navbar-brand">
                    <span>
                        Online Auction House
                    </span>
                </div>
          
            </div>
        </div>
        <Navigation/>
        </div>
    );
}