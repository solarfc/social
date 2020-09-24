import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";
import App from "./components/app";

const state = store.getState();
const dispatch = store.dispatch;

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <App state={state} dispatch={dispatch}/>
        </Router>, document.getElementById('root')
    )
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree(state);
});

serviceWorker.unregister();