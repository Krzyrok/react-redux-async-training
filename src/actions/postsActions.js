import fetch from "isomorphic-fetch";
import createActionCreator from "./createActionCreator.js";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            dispatch(fetchPosts(subreddit));
        }
    };
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}

function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    };
}

const requestPosts = createActionCreator(REQUEST_POSTS, "subreddit");

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        posts: json.data.children.map(child => child.data),
        subreddit,
        receivedAt: Date.now()
    };
}
