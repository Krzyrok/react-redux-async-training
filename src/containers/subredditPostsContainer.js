import { connect } from "react-redux";
import SubredditPosts from "../components/subredditPosts.js";

function mapStateToProps(state) {
    return {
        selectedSubreddit: state.selectedSubreddit
    };
}

export default connect(mapStateToProps)(SubredditPosts);
