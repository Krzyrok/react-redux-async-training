import fetch from "isomorphic-fetch";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POSTS_FAILURE = "RECEIVE_POSTS_FAILURE";

export function fetchPostsIfNeeded(subreddit) {
    return {
        types: [ REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POSTS_FAILURE ],
        callAPI: () => fetch(`http://www.reddit.com/r/${subreddit}.json`),
        shouldCallAPI: state => shouldFetchPosts(state, subreddit),
        actionProperties: { subreddit },
        successActionCreator: json => receivePosts(json, subreddit)
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

function receivePosts(json, subreddit) {
    return {
        type: RECEIVE_POSTS,
        posts: json.data.children.map(child => child.data),
        subreddit,
        receivedAt: Date.now()
    };
}
