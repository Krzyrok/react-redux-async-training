const callAPIMiddleware = ({ dispatch, getState}) => next => action => {
    const {
        types,
        callAPI,
        shouldCallAPI = () => true,
        actionProperties = {},
        customSuccessActionCreator
    } = action;

    if (!types) {
        return next(action);
    }

    if (!Array.isArray(types)
        || types.length !== 3
        || !types.every(type => typeof type === "string")
    ) {
        throw new Error("'types' property has to be an array with 3 string elements");
    }

    if (typeof callAPI !== "function") {
        throw new Error("'callAPI' property has to be a function");
    }

    if (!shouldCallAPI(getState())) {
        return;
    }

    const [ requestActionType, successActionType, failureActionType ] = types;

    dispatch({
        ...actionProperties,
        type: requestActionType
    });

    return callAPI()
        .then(
            response => response.json(),
            error => dispatch({
                ...actionProperties,
                type: failureActionType,
                error
            })
        ).then(json => {
            if (typeof customSuccessActionCreator === "function") {
                return dispatch(customSuccessActionCreator(json));
            }

            return dispatch({
                ...actionProperties,
                type: successActionType,
                response: json
            });
        });
};

export default callAPIMiddleware;
