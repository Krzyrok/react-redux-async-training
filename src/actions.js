import fetch from "isomorphic-fetch";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
}

function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    };
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        posts: json.data.children.map(child => child.data),
        subreddit,
        receivedAt: Date.now()
    };
}

function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    };
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            dispatch(fetchPosts(subreddit));
        }
    };
}