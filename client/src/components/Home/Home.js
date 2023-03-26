import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";



export const Home = () => {
    return (
        <>
            < Header />
          
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

            < Footer />


        </>

    );
}