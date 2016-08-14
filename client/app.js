/**
  前端入口文件
  曾文彬
  2016.8.11
**/

/**
 redux工作流程
 1、声明actionCreator
 2、reducer
 3、combineReducers
 4、createStore
 5、bindActionCreators
**/

'use strict';

import store from 'store/index';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/index';
import { Component }, React from 'react';
import { RenderDOM } from 'react-dom';

let dispatchToProps = dispatch => bindActionCreators(actions, dispatch);
let initialState = {};

class App extends

let render = () => {

};

store.subscribe(render);
