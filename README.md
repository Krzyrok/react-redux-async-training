# react-redux-async-training

This is playground to train redux with react. <br />
To better understand the project, read firstly redux documentation: http://redux.js.org/index.html
<br /><br />


<h2>start</h2>
To start run:
<ol>
    <li>npm install</li>
    <li>npm start</li>
</ol>
<br />

<h2>code structure</h2>
I applied "rails-style" (separate folders for "actions", "reducers", "containers", and "components")
for code structure because of project size - this is only playground, so it shouldn't grow. It can be used as "starter pack". In case of extending this project (or creating new one based on this) it is recommended to split files by "domain": http://marmelab.com/blog/2015/12/17/react-directory-structure.html
<br /><br />

<h2>technology stack</h2>
Used:
<ol>
    <li>ESLint and recommended rules</li>
    <li>Webpack (extracted "libs/vendor" chunk in configuration) with webpack-dev-server and react-hot-loader from gaearon </li>
    <li>Babel with ES6 and react presets and transform-object-rest-spread plugin </li>
    <li>React </li>
    <li>Redux with react-redux and middlewares (redux-thunk, redux-logger)</li>
</ol>
<br />


<h2>debugging</h2>
For debugging:
<ol>
    <li>change devtool property in webpack.config.js (from "eval" to the e.g. "source-map") </li>
    <li>open browser devtools console - all actions are logged thanks to the redux-logger (it is used in configureStore.js) </li>
    <li>install Redux DevTools (e.g. as Chrome extension: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd ) </li>
</ol>
<br/>

<h2>advanced</h2>
There are branches with additional stuff: <br />
<ol>
    <li>reducing-boilerplate - branch created to test scenarios from redux documentation http://redux.js.org/docs/recipes/ReducingBoilerplate.html <br />
        <ul>
            <li>
                actions/createActionCreator.js - function for creating simple/dump actions.
                <br/> Example of usage in actions/subredditActions.js
            </li>
            <li>
                middlewares/callAPIMiddleware.js - middleware created for generic actions during fetching data/calling API. It takes only objects which have 'types' property (instead of 'type').
                <br/> Mandatory properties: types (array of 3 strings), callAPI (function)
                <br/> Optional properties: shouldCallAPI (function), actionProperties (object), successActionCreator (function)
                <br/> Example of usage in actions/postsActions.js (fetchPostsIfNeeded function)
            </li>
            <li>
                reducers/createReducer.js - helper for creating reducers (without 'switch' statement and 'default case'). It was implemented only for practicing. I suggest avoid it (defining pure functions with 'switch' statement are more readable in my opinion).
                <br/> Example of usage in reducers/postsReducer.js and reducers/subredditReducer.js
            </li>
        </ul>
    </li>
</ol>
<br />
