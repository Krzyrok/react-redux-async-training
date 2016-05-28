import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./reducers/index.js";

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require("./reducers/index.js").default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
