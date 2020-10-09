import React from "react";
import {Switch, Route} from "react-router-dom";
import "./main.css";
import DialogContainer from "../dialogs";
import UsersContainer from "../users-api";
import ProfileContainer from "../profile/profile-container";


const Main = () => {

    return (
        <main>
            <Switch>
                <Route path="/profile/:userId?" render={() => {return <ProfileContainer />}}></Route>
                <Route path="/dialogs" render={() => {return <DialogContainer />}}></Route>
                {/*<Route path="/posts" render={() => {return <PostsContainer />}}></Route>*/}
                <Route path="/users" render={() => {return <UsersContainer />}}></Route>
            </Switch>
        </main>
    );
};

export default Main;