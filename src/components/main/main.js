import React from "react";
import {Switch, Route} from "react-router-dom";
import "./main.css";
import MyProfile from "../my-profile";
import PostsContainer from "../posts";
import DialogContainer from "../dialogs";
import UsersContainer from "../users";


const Main = () => {

    return (
        <main>
            <Switch>
                <Route path="/profile" render={() => {return <MyProfile name="Vlad"/>}}></Route>
                <Route path="/dialogs" render={() => {return <DialogContainer />}}></Route>
                <Route path="/posts" render={() => {return <PostsContainer />}}></Route>
                <Route path="/users" render={() => {return <UsersContainer />}}></Route>
            </Switch>
        </main>
    );
};

export default Main;