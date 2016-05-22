import { connect } from "react-redux";
import AsyncApp from "./asyncApp.js";

function mapStateToProps(state) {
    return {
        selectedSubreddit: state.selectedSubreddit
    };
}

export default connect(mapStateToProps)(AsyncApp);
