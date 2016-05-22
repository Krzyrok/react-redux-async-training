import { connect } from "react-redux";
import AsyncApp from "./asyncApp.jsx";

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: false,
        items: []
    };

    return {
        isFetching,
        lastUpdated,
        posts,
        selectedSubreddit
    };
}

export default connect(mapStateToProps)(AsyncApp);
