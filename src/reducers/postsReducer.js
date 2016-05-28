import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions/postsActions.js";
import { INVALIDATE_SUBREDDIT } from "../actions/subredditActions.js";
import createReducer from "./createReducer.js";

const postsBySubreddit = createReducer({}, {
    [INVALIDATE_SUBREDDIT]: (state, action) => updatePostsForSubreddit(state, action),
    [REQUEST_POSTS]: (state, action) => updatePostsForSubreddit(state, action),
    [RECEIVE_POSTS]: (state, action) => updatePostsForSubreddit(state, action)
});

export default postsBySubreddit;

const updatePostsForSubreddit = (state, action) => ({
    ...state,
    [action.subreddit]: posts(state[action.subreddit], action)
});

const posts = createReducer({
    isFetching: false,
    didInvalidate: false,
    items: []
}, {
    [INVALIDATE_SUBREDDIT]: (state) => ({ ...state, didInvalidate: true }),
    [REQUEST_POSTS]: (state) => ({ ...state, isFetching: true, didInvalidate: false }),
    [RECEIVE_POSTS]: (state, action) => ({
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
    })
});
