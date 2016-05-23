import { connect } from "react-redux";
import RefreshSubreddit from "../components/refreshSubreddit.js";
import { invalidateSubreddit } from "../actions/subredditActions.js";
import { fetchPostsIfNeeded } from "../actions/postsActions.js";

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching } = postsBySubreddit[selectedSubreddit] || {};

    return {
        isFetching,
        selectedSubreddit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRefresh: selectedSubreddit => {
            dispatch(invalidateSubreddit(selectedSubreddit));
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshSubreddit);
