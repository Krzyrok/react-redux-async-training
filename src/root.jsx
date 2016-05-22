import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore.js";
import AsyncAppContainer from "./asyncAppContainer.jsx";

const store = configureStore();

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <AsyncAppContainer />
            </Provider>
        );
    }
}

export default Root;
