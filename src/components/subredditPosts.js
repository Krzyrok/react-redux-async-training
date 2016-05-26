import React, { Component, PropTypes } from "react";
import PickerContainer from "../containers/pickerContainer.js";
import LastUpdateInfoContainer from "../containers/lastUpdateInfoContainer.js";
import RefreshSubredditContainer from "../containers/refreshSubredditContainer.js";
import PostsContainer from "../containers/postsContainer.js";

class AsyncApp extends Component {
    componentDidMount() {
        const { onInitialize, selectedSubreddit } = this.props;
        onInitialize(selectedSubreddit);
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
    onInitialize: PropTypes.func.isRequired
};

export default AsyncApp;
