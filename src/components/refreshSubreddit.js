import React, { PropTypes } from "react";

const RefreshSubreddit = ({ isFetching, selectedSubreddit, onRefresh }) => {
    const onClick = event => {
        event.preventDefault();
        onRefresh(selectedSubreddit);
    };

    return (
        <div>
            {!isFetching &&
                <a href="#" onClick={onClick}>
                    Refresh
                </a>
            }
        </div>
    );
};

RefreshSubreddit.propTypes = {
    isFetching: PropTypes.bool,
    onRefresh: PropTypes.func,
    selectedSubreddit: PropTypes.string
};

export default RefreshSubreddit;
