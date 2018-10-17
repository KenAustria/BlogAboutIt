import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostsIndex from './containers/PostsIndex';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 <BrowserRouter>
  <div>
   <Route path="/" component={PostsIndex} />
  </div>
 </BrowserRouter>,
 document.getElementById('root')
);

serviceWorker.unregister();
