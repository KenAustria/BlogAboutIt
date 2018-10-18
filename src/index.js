import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PostsIndex from "./containers/PostsIndex";
import PostsNew from "./containers/PostsNew";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
