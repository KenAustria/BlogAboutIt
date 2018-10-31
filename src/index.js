import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PostsIndex from "./containers/PostsIndex/PostsIndex";
import PostsNew from "./containers/PostsNew/PostsNew";
import PostsShow from './containers/PostsShow/PostsShow';
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={PostsNew} />
					<Route path="/posts/:id" component={PostsShow} />
					<Route path="/" component={PostsIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
