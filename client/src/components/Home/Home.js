import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Navigation } from "../Navigation/Navigation";

export const Home = () => {
    return (
        <>
            < Header />
           {/* < Navigation /> */}
          
            <section className=" slider_section position-relative">
             
                <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="img-box">

                                <img src={"images/istockphoto-1141354654-612x612.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                        </div>
                    </div>
                </div>
            </section>
            {/* < Info /> */}
            < Footer />


        </>

    );
}