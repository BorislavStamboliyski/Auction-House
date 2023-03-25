import { Navigation } from "../Navigation/Navigation";
import * as auctionService from "../../services/auctionService"
import { useForm } from "../../hooks/useForm";
import { useUserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

// Fix some images and validations!!

export const CreateAuction = () => {

    const {token} = useUserContext();
    const navigate = useNavigate();
    const { formValues, onChangeHandler } = useForm({
        name: '',
        category: 'estate',
        price: '',
        imageUrl: '',
        summary: '',
    })

    const onSubmitClick = async (e) => {
        e.preventDefault();

        // Try catchshould be done
        await auctionService.createAuction(formValues, token);
        navigate('/auctions');
    }

    return (
        <section className="vh-100 bg-image"
            style={{ backgroundImage: "url('/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg')" }}>

            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <Navigation />
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Publish an Auction</h2>

                                    <form onSubmit={onSubmitClick}>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" name="name" className="form-control form-control-lg" value={formValues.name} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="form3Example1cg" >Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3cg">Category:</label>
                                            <select id="form3Example3cg" name="category" className="form-control form-control-lg" value={formValues.category} onChange={onChangeHandler} >
                                                <option value="estate">Real Estate</option>
                                                <option value="vehicle">Vehicles</option>
                                                <option value="electronics">Electronics</option>
                                            </select>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example4cg" name="price" className="form-control form-control-lg" value={formValues.price} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="form3Example4cg">Starting Price:</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example4cdg" name="imageUrl" className="form-control form-control-lg" value={formValues.imageUrl} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="form3Example4cdg">ImageUrl:</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example4cdg" name="summary" className="form-control form-control-lg" value={formValues.summary} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="form3Example4cdg">Summary:</label>
                                        </div>


                                        <div className="contact_form-container">
                                            <button type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Publish</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );


}