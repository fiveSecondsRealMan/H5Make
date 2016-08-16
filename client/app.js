/**
  H5Make入口文件
**/

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import store from 'store/index';
import * as actions from 'actions/index';

// 引入公共样式
import './pages/statics/styles/common.css';

// 引入组件
import Main from 'components/main';

// 定义组件容器
class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

// 定义dispatch和action结合的action对象
const dispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// 定义维护和管理应用状态的store
const myStore = store();

// 定义组件渲染方法
const render = () => {
  ReactDOM.render(<App { ...dispatchToProps(myStore.dispatch) } />, document.getElementById('app'));
};

render();

myStore.subscribe(render);
