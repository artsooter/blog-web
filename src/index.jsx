import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import $ from 'jquery';
import { Provider } from 'react-redux';
import store from './component/info/store';

ReactDom.render(// 渲染元素
  <Provider store={store}>
    <HashRouter>
      __ROOT__ROUTE__
    </HashRouter>
  </Provider>,
  $('#react')[0],
);
