import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { loginUser } from "../../services/authService"
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../contexts/userContext";


export const Login = () => {

    const { onLogin } = useUserContext(); 

    const { formValues, onChangeHandler } = useForm({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const onSubmitClick = async (e) => {
        e.preventDefault();

        const user = await loginUser(formValues);

        onLogin(user);
        navigate('/')
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
                                    <h2 className="text-uppercase text-center mb-5">Login</h2>
                                    <form onSubmit={onSubmitClick}> 
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3cg" name="email" className="form-control form-control-lg" value={formValues.email} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4cg" name="password" className="form-control form-control-lg" value={formValues.password} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>

                                        </div>


                                        <div className="contact_form-container">
                                            <button type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Do not have an account? <Link to="/register"
                                            className="fw-bold text-body"><u>Register here</u></Link></p>

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