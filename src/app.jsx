import React from "react";
import Component1 from "./component1.jsx";
import Component2 from "./component2.jsx";

class App extends React.Component {
    render () {
        return (
            <div>
                <Component1 />
                <Component2 />
            </div>
        );
    }
}

export default App;
