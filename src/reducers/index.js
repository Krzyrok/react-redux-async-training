import { combineReducers } from "redux";
import selectedSubreddit from "./subredditReducer.js";
import postsBySubreddit from "./postsReducer.js";

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
});

export default rootReducer;
