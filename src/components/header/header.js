import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth, logoutUserThunkCreator}) => {

    const isAutz = isAuth ? login : 'Login';
    const logout = isAuth ? <button onClick={logoutUserThunkCreator}>Log out</button> : null;

    return (
        <header>
            <img src="https://image.shutterstock.com/image-vector/circle-logo-design-template-creative-260nw-1557040325.jpg" alt=""/>
            <div className="login__block">
                <NavLink to="/login">{isAutz}</NavLink>
                {logout}
            </div>
        </header>
    );
};

export default Header;