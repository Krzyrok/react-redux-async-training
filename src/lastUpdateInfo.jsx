import React, { PropTypes } from "react";

const LastUpdateInfo = ({ lastUpdated }) => {
    return (
        <div>
            {lastUpdated &&
                <span>
                    Last updated at: {new Date(lastUpdated).toLocaleTimeString()}
                    {" "}
                </span>
            }
        </div>
    );
};

LastUpdateInfo.propTypes = {
    lastUpdated: PropTypes.number
};

export default LastUpdateInfo;
