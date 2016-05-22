import { connect } from "react-redux";
import Picker from "./picker.jsx";
import { selectSubreddit } from "./actions.js";

function mapStateToProps(state) {
    return {
        value: state.selectedSubreddit,
        options: ["reactjs", "frontend", "keke"]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: nextSubreddit => {
            dispatch(selectSubreddit(nextSubreddit));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker);