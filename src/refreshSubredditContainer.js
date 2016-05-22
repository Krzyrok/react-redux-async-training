import { connect } from "react-redux";
import RefreshSubreddit from "./refreshSubreddit.jsx";
import { invalidateSubreddit, fetchPostsIfNeeded} from "./actions.js";

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