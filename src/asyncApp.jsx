import React, { Component, PropTypes } from "react";
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from "./actions.js";
import Picker from "./picker.jsx";
import Posts from "./posts.jsx";

class AsyncApp extends Component {
    constructor(props) {
        super(props);
        this.handleSubredditChange = this.handleSubredditChange.bind(this);
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

    handleSubredditChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit));
    }

    handleRefreshClick(e) {
        e.preventDefault();

        const { selectedSubreddit, dispatch } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    onChange={this.handleSubredditChange}
                    options={[ "reactjs", "frontend" ]}
                />
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
                    {posts.length === 0 &&
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
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

export default AsyncApp;
