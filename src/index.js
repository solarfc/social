import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";
import App from "./components/app";
import {StoreProvider} from "./components/store-context/store-context";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <StoreProvider value={store}>
            <Router>
                <App />
            </Router>
        </StoreProvider>,
        document.getElementById('root')
    )
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

serviceWorker.unregister();