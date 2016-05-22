import React, { Component, PropTypes } from "react";
import { fetchPostsIfNeeded } from "./actions.js";
import PickerContainer from "./pickerContainer.js";
import LastUpdateInfoContainer from "./lastUpdateInfoContainer.js";
import RefreshSubredditContainer from "./refreshSubredditContainer.js";
import Posts from "./posts.jsx";

class AsyncApp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { selectedSubreddit, dispatch } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    }

    render() {
        const { posts, isFetching } = this.props;

        return (
            <div>
                <PickerContainer />
                <LastUpdateInfoContainer />
                <RefreshSubredditContainer />
                <div>
                    {isFetching && posts.length === 0 &&
                        <h2>LOADING...</h2>
                    }
                    {!isFetching && posts.length === 0 &&
                        <div>No data</div>
                    }
                    {posts.length > 0 &&
                        <div
                            style={{opacity: isFetching ? 0.5 : 1}}
                        >
                            <Posts posts={posts} />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array,
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

export default AsyncApp;
