# react-redux-async-training

This is playground to train redux with react. <br /> <br />


<h2>start</h2>
To start run: <br />
1) npm install <br />
2) npm start <br />
<br />


<h2>code structure</h2>
I applied "rails-style" (separate folders for "actions", "reducers", "containers", and "components")
for code structure because of project size - this is only playground, so it shouldn't grow. It can be used as "starter pack". In case of extending this project (or creating new one based on this) it is recommended to split files by "domain": http://marmelab.com/blog/2015/12/17/react-directory-structure.html <br />
<br />


<h2>technology stack</h2>
Used: <br />
1) ESLint and recommended rules <br />
2) Webpack (extracted "libs/vendor" chunk in configuration) with webpack-dev-server and react-hot-loader from gaearon <br />
3) Babel with ES6 and react presets and babel-polyfill <br />
4) React <br />
5) Redux with react-redux and middlewares (redux-thunk, redux-logger)<br />
<br />


<h2>debugging</h2>
For debugging: <br />
1) change devtool property in webpack.config.js (from 'eval' to the e.g. 'source-map') <br />
2) open browser devtools console - all actions are logged thank to redux-logger (configureStore.js) <br />
3) install Redux DevTools (e.g. as Chrome extension: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd ) <br />
<br />
