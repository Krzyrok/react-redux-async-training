import React, { Component, PropTypes } from "react";
import { fetchPostsIfNeeded } from "./actions.js";
import PickerContainer from "./pickerContainer.js";
import LastUpdateInfoContainer from "./lastUpdateInfoContainer.js";
import RefreshSubredditContainer from "./refreshSubredditContainer.js";
import PostsContainer from "./postsContainer.js";

class AsyncApp extends Component {
    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    render() {
        return (
            <div>
                <PickerContainer />
                <LastUpdateInfoContainer />
                <RefreshSubredditContainer />
                <PostsContainer />
            </div>
        );
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default AsyncApp;
