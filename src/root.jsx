import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore.js";
import AsyncApp from "./asyncApp.jsx";

const store = configureStore();

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        );
    }
}

export default Root;
