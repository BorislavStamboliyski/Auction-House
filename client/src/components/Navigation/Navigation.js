import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from "react";
import { Link } from "react-router-dom";

import { useUserContext } from "../../contexts/userContext";


export const Navigation = () => {

    const [logouting, setLogouting] = useState(false);

    const { isAuthenticated, onLogout, username } = useUserContext();


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
        <section className='nav-container'>
            <div className='nav-container'>
                <nav className='nav'>
                    {isAuthenticated &&
                        (<div className="welcome-message">
                            <span>Welcome, {username}!</span>
                        </div>)
                    }

                    <ul className='menu'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/about">About </Link>
                        </li>
                        <li >
                            <Link to="/auctions">Browse Auctions</Link>
                        </li>
                        {isAuthenticated &&
                            (<li >
                                <Link to="/auctions/create">Publish Auction</Link>
                            </li>)}
                        <li >
                            <Link to="/contacts">Contact Us</Link>
                        </li>
                        {!isAuthenticated &&
                            (<li >
                                <Link to="/login">Login</Link></li>)}
                        {!isAuthenticated && (
                            <li >
                                <Link to="/register">Register</Link></li>)}
                        {isAuthenticated &&
                            (<li >
                                <Link onClick={onLogoutClick}>Logout</Link></li>)}
                    </ul>
                </nav>
            </div>
            {logouting && <div
                className="modal show"
                style={{ display: 'block' }}
            >
                <Modal.Dialog className="modal-dialog">
                    <Modal.Header closeButton onClick={onCancelClick}>
                        <Modal.Title className='modal-title'>Logout</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to logout?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="info" onClick={onYesClick}>Yes</Button>
                        <Button variant="info" onClick={onCancelClick}>No</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>}
        </section>

    );
}