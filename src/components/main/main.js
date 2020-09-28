import React from "react";
import {Switch, Route} from "react-router-dom";
import "./main.css";
import MyProfile from "../my-profile";
import PostsContainer from "../posts";
import DialogContainer from "../dialogs";


const Main = () => {

    return (
        <main>
            <Switch>
                <Route path="/profile" render={() => {return <MyProfile name="Vlad"/>}}></Route>
                <Route path="/dialogs" render={() => {return <DialogContainer />}}></Route>
                <Route path="/posts" render={() => {return <PostsContainer />}}></Route>
            </Switch>
        </main>
    );
};

export default Main;