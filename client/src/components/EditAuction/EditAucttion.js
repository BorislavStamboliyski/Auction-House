import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useUserContext } from "../../contexts/userContext";
import { useForm } from "../../hooks/useForm";
import * as auctionService from '../../services/auctionService'

import { Error } from "../Error/Error";
import { Header } from "../Header/Header";


export const EditAuction =  () => {

    const {token} = useUserContext();
    const {auctionId} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const { formValues, onChangeHandler, changeFormValues } = useForm({
        name: '',
        category:  '',
        price: '',
        imageUrl: '',
        summary: '',
    });


    useEffect(() => {
        auctionService.getAuction(auctionId)
        .then(result => {
            changeFormValues(result);
        }
    )}, [auctionId])

    const onSubmitClick = async (e) => {
        e.preventDefault();

        if (formValues.name !== '' && formValues.category !== '' && formValues.price !== '' && formValues.imageUrl !== '' && formValues.summary !== '') {
        await auctionService.editAuction(formValues, auctionId, token);
        navigate(`/auctions/${auctionId}`);
        setError(false);
        } else {
            setError(true);
        }
    }

    const onOkClick = () => {
        setError(false)
    }

    return(
        <><Header/>
        <section className="vh-100 bg-image_editCreate">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Edit Your Auction</h2>
                                    {error && <Error onOkClick={onOkClick}/>}
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
                                                <option value="furniture">Furniture</option>
                                                <option value="other">Other</option>
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


                                        <div className="button_form-container">
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
        </>
    );
}