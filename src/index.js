import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostsIndex from './containers/PostsIndex';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
   <div>
    <Route path="/" component={PostsIndex} />
   </div>
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();
