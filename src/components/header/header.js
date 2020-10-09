import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth}) => {

    isAuth = isAuth ? login : 'Login';

    return (
        <header>
            <img src="https://image.shutterstock.com/image-vector/circle-logo-design-template-creative-260nw-1557040325.jpg" alt=""/>
            <div className="login__block">
                <NavLink to="/login">{isAuth}</NavLink>
            </div>
        </header>
    );
};

export default Header;