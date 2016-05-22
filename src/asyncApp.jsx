import React, { Component, PropTypes } from "react";
import { fetchPostsIfNeeded, invalidateSubreddit } from "./actions.js";
import PickerContainer from "./pickerContainer.jsx";
import Posts from "./posts.jsx";

class AsyncApp extends Component {
    constructor(props) {
        super(props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
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

    handleRefreshClick(e) {
        e.preventDefault();

        const { selectedSubreddit, dispatch } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    render() {
        const { posts, isFetching, lastUpdated } = this.props;

        return (
            <div>
                <PickerContainer />
                <div>
                    {lastUpdated &&
                        <span>
                            Last updated at: {new Date(lastUpdated).toLocaleTimeString()}
                            {" "}
                        </span>
                    }
                    {!isFetching &&
                        <a href="#" onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    }
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
