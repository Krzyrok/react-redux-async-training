import { connect } from "react-redux";
import Posts from "./posts.js";

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {};

    return {
        isFetching,
        posts
    };
}

export default connect(mapStateToProps)(Posts);
