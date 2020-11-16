import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import "./main.css";
// import DialogContainer from "../dialogs";
import UsersContainer from "../users-api";
import ProfileContainer from "../profile/profile-container";
import Login from "../login";
import Spinner from "../spinner";

const DialogContainer = React.lazy(() => import("../dialogs"));

const Main = () => {

    return (
        <main>
            <Switch>
                <Route path="/profile/:userId?" render={() => {return <ProfileContainer />}}></Route>
                <Route path="/dialogs" render={() => {return <Suspense fallback={<Spinner />}><DialogContainer /></Suspense>}}></Route>
                <Route path="/users" render={() => {return <UsersContainer />}}></Route>
                <Route path="/login" render={() => {return <Login />}}></Route>
            </Switch>
        </main>
    );
};

export default Main;