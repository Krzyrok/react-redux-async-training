import { connect } from "react-redux";
import LastUpdateInfo from "../components/lastUpdateInfo.js";

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { lastUpdated } = postsBySubreddit[selectedSubreddit] || {};

    return {
        lastUpdated
    };
}

export default connect(mapStateToProps)(LastUpdateInfo);
