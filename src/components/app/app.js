import React from "react";
import "./app.css";
import Header from "../header";
import Aside from "../aside";
import Main from "../main";

const App = () => {
    return (
        <div>
            <Header />
            <section className="main-content">
                <Aside />
                <Main />
            </section>
        </div>
    );
};

export default App;