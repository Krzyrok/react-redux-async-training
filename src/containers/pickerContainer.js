import { connect } from "react-redux";
import Picker from "../components/picker.js";
import { selectSubreddit } from "../actions/subredditActions.js";
import { fetchPostsIfNeeded } from "../actions/postsActions.js";

function mapStateToProps(state) {
    return {
        value: state.selectedSubreddit,
        options: ["reactjs", "frontend", "keke"]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: selectedSubreddit => {
            dispatch(selectSubreddit(selectedSubreddit));
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
