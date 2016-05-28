import { SELECT_SUBREDDIT } from "../actions/subredditActions.js";
import createReducer from "./createReducer.js";

const selectedSubreddit = createReducer("reactjs", {
    [SELECT_SUBREDDIT]: (state, action) => action.subreddit
});

export default selectedSubreddit;
