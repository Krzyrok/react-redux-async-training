import { connect } from "react-redux";
import SubredditPosts from "../components/subredditPosts.js";
import { fetchPostsIfNeeded } from "../actions/postsActions.js";

function mapStateToProps(state) {
    return {
        selectedSubreddit: state.selectedSubreddit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onInitialize: selectedSubreddit => {
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditPosts);
