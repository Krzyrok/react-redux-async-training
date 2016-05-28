import createActionCreator from "./actionCreator.js";

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

export const selectSubreddit = createActionCreator(SELECT_SUBREDDIT, "subreddit");
export const invalidateSubreddit = createActionCreator(INVALIDATE_SUBREDDIT, "subreddit");
