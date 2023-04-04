import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import * as auctionService from '../../services/auctionService'

import { Header } from "../Header/Header";
import { useAuctionContext } from "../../contexts/auctionContext";



export const CloseAuction = () => {

    const {onDeleteAuctionSubmit} = useAuctionContext();
    const { auctionId } = useParams();

    const { formValues, changeFormValues, onSubmit } = useForm({
        _id: '', 
        name: '',
        category: '',
        price: '',
        imageUrl: '',
        summary: '',
    },onDeleteAuctionSubmit);


    useEffect(() => {
        auctionService.getAuction(auctionId)
            .then(result => {
                changeFormValues(result);
            }
            )
    }, [auctionId])

   

    return (
        <>
       <Header />
        <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Closing This Auction</h2>

                                    <form onSubmit={onSubmit}>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" name="name" className="form-control form-control-lg" value={formValues.name} disabled />
                                            <label className="form-label" htmlFor="form3Example1cg" >Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3cg">Category:</label>
                                            <select id="form3Example3cg" name="category" className="form-control form-control-lg" value={formValues.category} disabled >
                                                <option value="estate">Real Estate</option>
                                                <option value="vehicle">Vehicles</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="tools">Tools and Machinery</option>
                                                <option value="jewelry">Jewelry</option>
                                                <option value="sporting_goods">Sporting goods and Equipment</option>
                                                <option value="furniture">Furniture</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example4cg" name="price" className="form-control form-control-lg" value={formValues.price} disabled />
                                            <label className="form-label" htmlFor="form3Example4cg">Starting Price:</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example4cdg" name="imageUrl" className="form-control form-control-lg" value={formValues.imageUrl} disabled />
                                            <label className="form-label" htmlFor="form3Example4cdg">ImageUrl:</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example4cdg" name="summary" className="form-control form-control-lg" value={formValues.summary} disabled />
                                            <label className="form-label" htmlFor="form3Example4cdg">Summary:</label>
                                        </div>


                                        <div className="button_form-container">
                                            <button type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4">Close Auction</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        </>
    );
}