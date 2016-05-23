import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore.js";
import SubredditPostsContainer from "./containers/subredditPostsContainer.js";

const store = configureStore();

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <SubredditPostsContainer />
            </Provider>
        );
    }
}

export default Root;
