import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, hashHistory, createMemoryHistory } from 'react-router';
import store from '../store';
import '../../node_modules/antd/dist/antd.less';
// import App from '../components/App';
import Test from '../pages/testImmutable';

const app = document.getElementById('reactNode');


ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
app);
