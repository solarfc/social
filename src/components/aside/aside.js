import React from "react";
import {NavLink} from "react-router-dom";
import asideStyle from "./aside.module.css";

const Aside = ({filter, onActiveChange}) => {

    const buttons = [
        {path: "profile", name: 'Profile'},
        {path: "dialogs", name: 'Dialogs'},
        {path: "news", name: 'News'},
        {path: "users", name: "Users"}
    ];

    return (
        <aside>
            <ul>
                {
                    buttons.map((item) => {
                        const {path, name} = item;

                        return (
                            <li key={name} className={asideStyle.item}>
                                <NavLink to={`/${path}`}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    );
};

export default Aside;