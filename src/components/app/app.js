import React from "react";
import "./app.css";
import Aside from "../aside";
import Main from "../main";
import HeaderContainer from "../header/header-container";

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <section className="main-content">
                <Aside />
                <Main />
            </section>
        </div>
    );
};

export default App;