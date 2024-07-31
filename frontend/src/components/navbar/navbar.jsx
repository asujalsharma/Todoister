import React from 'react';
import './navbar.css'; // Import a CSS file for custom styles
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const logout = ()=>{
        sessionStorage.clear("id");
        dispatch(authActions.logout());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <h1><b><LuListTodo /> &nbsp; TODOSU</b></h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active todo-item mx-1 " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active todo-item mx-1" aria-current="page" to="/todo">todo</Link>
                            </li>
                            {!isLoggedIn && (
                            <>
                            <li className="nav-item">
                                <Link className="nav-link active nav-btn mx-1" aria-current="page" to="/signup">Sign up</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link active nav-btn mx-1" aria-current="page" to="/signin">Sign in</Link>
                            </li>
                            </>
                            )}
                            {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link active nav-btn mx-1" aria-current="page" to="/" onClick={logout}>Log out</Link>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
