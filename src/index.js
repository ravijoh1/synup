import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import SimpleForm from './components/maps.component/newsearch.component';
import Navbar from './components/maps.component/navbar.component';


import App from './components/app';
import reducers from './reducers';

import "bootstrap/scss/bootstrap.scss";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={SimpleForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid-react'));
