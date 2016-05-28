function createActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type };

        argNames.forEach((argName, index) => {
            action[argName] = args[index];
        });

        return action;
    };
}

export default createActionCreator;
