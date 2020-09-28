import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";
import App from "./components/app";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


// store.subscribe(() => {
//     rerenderEntireTree();
// });

window.state = store.getState();

serviceWorker.unregister();