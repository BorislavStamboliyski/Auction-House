import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../contexts/userContext";
import { useForm } from "../../hooks/useForm";
import * as authService from "../../services/authService";

import { Error } from "../Error/Error";
import { Header } from "../Header/Header";

export const Register = () => {

    const { onLogin } = useUserContext();
    const [error, setError] = useState(false);
    const { formValues, onChangeHandler } = useForm({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const navigate = useNavigate();

    const onSubmitClick = async (e) => {
        e.preventDefault();
        if (formValues.username.length !== 0 &&
            formValues.email.length !== 0 &&
            formValues.password.length !== 0 &&
            formValues.repeatPassword !== 0 &&
            formValues.password === formValues.repeatPassword) {
            const { repeatPassword, ...data } = formValues
            const user = await authService.registerUser(data);
            onLogin(user);
            navigate('/')
            setError(false)
        } else {
            setError(true);
        }
    }

    const onOkClick = () => {
        setError(false);
    }

    return (
        <>
            <Header />

            <section className="vh-100 bg-image_register">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">

                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        {error && <Error onOkClick={onOkClick} />}
                                        <form onSubmit={onSubmitClick}>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" name="username" className="form-control form-control-lg" value={formValues.username} onChange={onChangeHandler} />
                                                <label className="form-label" htmlFor="form3Example1cg" >Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" name="email" className="form-control form-control-lg" value={formValues.email} onChange={onChangeHandler} />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" name="password" className="form-control form-control-lg" value={formValues.password} onChange={onChangeHandler} />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" name="repeatPassword" className="form-control form-control-lg" value={formValues.repeatPassword} onChange={onChangeHandler} />
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            </div>



                                            <div className="button_form-container">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                                                className="fw-bold text-body"><u>Login here</u></Link></p>

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