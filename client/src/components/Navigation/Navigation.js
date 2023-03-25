import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../contexts/userContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Fix A tags 
// Make on logout to ask a question

export const Navigation = () => {

    const [logouting, setLogouting] = useState(false);

    const { isAuthenticated, onLogout } = useUserContext();


    const onLogoutClick = () => {
        setLogouting(true);
    }

    const onCancelClick = () => {
        setLogouting(false);
    }

    const onYesClick = () => {
        onLogout();
        setLogouting(false);
    }

    return (
        <section className="nav_section">
            <div className="container">
                <div className="custom_nav2">
                    <nav className="navbar navbar-expand custom_nav-container ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex  flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/auctions">Browse Auctions</Link>
                                    </li>
                                    {isAuthenticated &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" to="/auctions/create">Publish Auction</Link>
                                        </li>)}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contacts">Contact Us</Link>
                                    </li>
                                    {!isAuthenticated &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link></li>)}
                                    {!isAuthenticated && (
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link></li>)}
                                    {isAuthenticated &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" onClick={onLogoutClick}>Logout</Link> </li>)}
                                </ul>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {logouting && <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={onCancelClick}>
                        <Modal.Title>Logout</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to logout?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onCancelClick}>No</Button>
                        <Button variant="primary" onClick={onYesClick}>Yes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>}
        </section>

    );
}