import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import $ from 'jquery';
import marked from 'marked';
import getRouterFromDir from 'plugin/router';

ReactDom.render(// 渲染元素
  <HashRouter>
    __ROOT__ROUTE__
  </HashRouter>,
  $('#react')[0],
);
