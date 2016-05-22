import { connect } from "react-redux";
import AsyncApp from "./asyncApp.jsx";

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        lastUpdated
    } = postsBySubreddit[selectedSubreddit] || {};

    return {
        lastUpdated,
        selectedSubreddit
    };
}

export default connect(mapStateToProps)(AsyncApp);
