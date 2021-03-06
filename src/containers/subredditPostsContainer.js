import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchPostsIfNeeded } from "../actions/postsActions.js";
import PickerContainer from "../containers/pickerContainer.js";
import LastUpdateInfoContainer from "../containers/lastUpdateInfoContainer.js";
import RefreshSubredditContainer from "../containers/refreshSubredditContainer.js";
import PostsContainer from "../containers/postsContainer.js";

class SubredditPosts extends Component {
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

SubredditPosts.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(state => ({
    selectedSubreddit: state.selectedSubreddit
}))(SubredditPosts);
