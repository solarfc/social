import { NavLink} from "react-router-dom";
import React from "react";

const Dialog = ({id, name}) => {
    return (
        <div className="dialog">
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default Dialog;