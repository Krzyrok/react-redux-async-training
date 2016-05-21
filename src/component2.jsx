import React from "react";

const componentStyle = {
    background: "red"
};

class Component2 extends React.Component {
    render () {
        return (
            <div style={componentStyle}>
                Component 2
            </div>
        );
    }
}

export default Component2;
